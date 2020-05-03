import express from "express";
import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

// This will create and array of two parts,
// everything before the text 'not rendered' inside index.html
// and everything after 'not rendered'.
const parts = html.split("not rendered");

const app = express();

// This will staticly serve everything in the dist directory
app.use("/dist", express.static("dist"));

// Middleware to run every time there is a request
// This is the core part of how to get this to work with React
// You rendered on the server and then you send it down to the client as complete markup
app.use((req, res) => {
  // parts[0] is the first half of the markup
  // res.write(parts[0]) is saying, here is all the CSS,
  // go download this while I render JavaScript in the background
  res.write(parts[0]);
  const reactMarkup = (
    // This is from Reach/Router to do the server-side rendering
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  // Using stream will progressively render the app one piece at a time
  const stream = renderToNodeStream(reactMarkup);

  // This is saying connect the pipes
  // send the respones to the user
  // but dont end
  stream.pipe(res, { end: false });

  // This is saying, once finished getting the response
  // get the second half of the markup and end the connection
  stream.on("end", () => {
    // parts[1] is the second half of the markup.
    res.write(parts[1]);
    res.end();
  });
});

// eslint-disable-next-line
console.log(`Listening on PORT ${PORT}`);
app.listen(PORT);
