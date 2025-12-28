import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/Fullscreencontainer.css";

export function Fullscreencontainer(props) {
    return (
        <div>
            <HelloWorldSample />
            {props.content}
        </div>);
}
