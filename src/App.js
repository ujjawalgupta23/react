import React from "react";
import ReactDOM from "react-dom/client";
// default import
import Header from "./components/Header";
// Named import
// import Header, { Title } from "./components/Header"; // this is not an object

// We can import default with any name
import NewHeader from "./components/Header";

// If I want to import everything
import * as Obj from "./components/Header";

import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
