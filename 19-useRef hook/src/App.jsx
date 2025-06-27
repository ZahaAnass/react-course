// useState() = Re-render the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger a re-renders.

//            1. Access/Interact with DOM elements
//            2. Handling Focus, Animations, and Transactions
//            3. Managing Timers and Intervals

import MyComponent from "./MyComponent.jsx"

function App(){

  return(
    <>
      <MyComponent />
    </>
  )
}

export default App