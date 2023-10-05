import React from "react";
import { render } from "react-dom";

const Home = () => {
    return (
        <p>This is a test paragraph!</p>
    )
}

render(<Home />, document.getElementById('app'));