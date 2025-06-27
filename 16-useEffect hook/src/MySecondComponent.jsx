// useEffect(function, [dependencies]);

import React, { useEffect, useState } from "react";

function MySecondComponent() {
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED")

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED")
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x  ${height}`;
    }, [width, height])
    
    return(
        <>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </>
    )
}

export default MySecondComponent;