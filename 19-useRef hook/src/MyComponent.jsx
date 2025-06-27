// useState() = Re-render the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger a re-renders.

//            1. Access/Interact with DOM elements
//            2. Handling Focus, Animations, and Transactions
//            3. Managing Timers and Intervals

import React, {useState, useEffect, useRef} from "react";

function MyComponent() {

    const ref = useRef(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component mounted or updated");
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
    }

    return(
        <>
            <button onClick={handleClick1}>
                Click Me 1
            </button>
            <input type="text" ref={inputRef1}/>

            <button onClick={handleClick2}>
                Click Me 2
            </button>
            <input type="text" ref={inputRef2}/>

            <button onClick={handleClick3}>
                Click Me 3
            </button>
            <input type="text" ref={inputRef3}/>
        </>
    );
}

export default MyComponent;