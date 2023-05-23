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

// React Element
const heading = (
    <h1 id="title" key="h1">
        From React Element
    </h1>
);

const NewHeading = function () {
    // you have to return
    return <h1>New Heading from React Component</h1>;
};

const name = "Ujjawal";

// React Components:-
// 1. Functional Component
// - it is a normal function
// - Name of the Component starts with Capital Letter

// This is a functional component returning JSX
const HeadingComponent = () => (
    // with arrow fn. no need to return
    <div>
        {heading}
        <NewHeading />
        {NewHeading()}
        <h2>Here is the H2 from Functional Component</h2>
        <h3>He is the H3</h3>

        {console.log("I can write any piece of JS code inside {}")}
        {name}
    </div>
);

// If we have a component inside a component, that is called Component/Composing Composition

const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing react element inside root
// render will modify our DOM, it will override root
root.render(<HeadingComponent />);
