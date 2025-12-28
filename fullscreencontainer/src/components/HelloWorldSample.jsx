import { createElement, useRef, useState } from "react";

export function HelloWorldSample(props) {
    const containerRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = async () => {
        if (!containerRef.current) return;

        if (!document.fullscreenElement) {
            await containerRef.current.requestFullscreen();
            setIsFullscreen(true);
        } else {
            await document.exitFullscreen();
            setIsFullscreen(false);
        }
    };


    return (
        <div ref={containerRef} className="fc-container">
            {/* Fullscreen button – ALWAYS visible */}
            <button
                type="button"
                className="fc-fullscreen-btn"
                onClick={toggleFullscreen}
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
                ⤢
            </button>

            <div className="fc-content">
                {props.content}
            </div>
        </div>
    );
}
