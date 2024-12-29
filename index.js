import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' in React 18+

const heading = React.createElement("h1", {}, "hello world from react");

// Use createRoot to render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
