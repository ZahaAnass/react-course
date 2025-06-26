// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

import MyComponent from "./MyComponent.jsx"

function App(){

  return(
    <>
      <MyComponent />
    </>
  )
}

export default App