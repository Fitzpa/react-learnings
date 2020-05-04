# react-learnings

### This is a repo of things you can do in React that is intended for me to better learn React and have a reference to look back on in the future.

### Each branch shows how to tackle a different area of React.

### The master branch is the basic layout of a react application. Each branch starts from where this branch ended.

* ## Branch 03-code-splitting demonstrates how to use **React.Suspense** and **React.lazy** together for code-splitting.

* ## Branch 04-server-side-rendering demonstrates two separate methods of using SSR to increase the initial paint speed and then let React take over from there. \*You can view these two methods by looking at the the commits.

    #### 1. Running a node server and using the _renderToString_ module from the _react-dom/server_ package to generate HTML on the server and send the markup down on the initial request for faster page loads and allow search engines to crawl your pages for SEO purposes and then calling React.hydrate() on a the node that now already has the server-side markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience. --See the server/index.js and the src/ClientApp.js files to view example.

    #### 2. Running a node server and using the _renderToNodeStream_ module from the _react-dom/server_ package to progressively render the app one piece at a time, gerneating HTML on the server and sending the markup down on the initial request for faster page loads and allowing search engines to crawl your pages for SEO purposes and then calling React.hydrate() on a the node that now already has the server-side markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience. --See the server/index.js and the src/ClientApp.js files to view example.

* ## Branch 05-type-script-with-react demonstrates how to set up TypeScript in React, along with how to set Eslint up to work with TypeScript and how to refactor all the JavaScript files in this app to use TypeScript instead.

* ## Branch 06-redux demonstrates how to set up and use Redux in place of the React context API to manage global state.
