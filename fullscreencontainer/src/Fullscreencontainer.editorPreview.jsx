import { createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

export function preview(props) {
 return (
        <div style={{ border: "1px dashed #aaa", minHeight: 120 }}>
            <HelloWorldSample {...props} />
        </div>
    );
}
export function getPreviewCss() {
    return require("./ui/Fullscreencontainer.css");
}
