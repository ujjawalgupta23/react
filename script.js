import React from "react";
import ReactDOM from "react-dom/client";

/**
 * HMR- Hot Module Replacement: 
 *  Parcel is doing this, it keeps track of all the files. 
    As soon as some change happens, it refreshes the page
 * Parcel uses File Wathcer Algorithm which is writeen in C++
 */

/** Parserl Advantages
 * Creates a Server
 * HMR- Hot Module Replacement
 * File Watcher Algorithm - C++
 * Bundling
 * Minify
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build Algorithm
 * Image Optimisation
 * Caching while Development
 * Compression
 * Compatible with older version of Browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree Shaking - Removing Unwanted Code
 */

// Instead of coding in HTML, we can use React in a particular js file

// This React comes from the global variable, which comes from our injected react js files
const heading = React.createElement(
    "h1",
    { id: "header", key: "h1" },
    "Hi Everyone"
);
console.log(heading);

/**
 * At the end of the the day React.createElement gives us an object
   and that object is then converted to HTML code
   and it is put in the DOM
 */

const heading1 = React.createElement(
    "h2",
    { id: "title1", key: "h2" },
    "Heading 1"
);
const heading2 = React.createElement(
    "h3",
    { id: "title2", key: "h3" },
    "Heading 2"
);
const container = React.createElement("div", { id: "container" }, [
    heading,
    heading1,
    heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing react element inside root
// render will modify our DOM, it will override root
root.render(container);
