import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
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
  const reactMarkup = (
    // This is from Reach/Router to do the server-side rendering
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  //   first part of the html, rendered markup, second part of the html
  res.send(parts[0] + renderToString(reactMarkup) + parts[1]);

  res.end();
});

// eslint-disable-next-line
console.log(`Listening on PORT ${PORT}`);
app.listen(PORT);
