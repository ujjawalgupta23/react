// Instead of coding in HTML, we can use React in a particular js file

// This React comes from the global variable, which comes from our injected react js files
const heading = React.createElement("h1", { id: "header" }, "Hi Everyone");
console.log(heading);

const heading1 = React.createElement("h2", { id: "title1" }, "Heading 1");
const heading2 = React.createElement("h3", { id: "title2" }, "Heading 2");
const container = React.createElement("div", { id: "container" }, [
    heading,
    heading1,
    heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing react element inside root
// render will modify our DOM, it will override root
root.render(container);
