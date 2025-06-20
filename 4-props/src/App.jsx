// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

// propTypes = a mechanism that ensures that the passed value
//             is of the correct datatype.
//             age: PropTypes.number.isRequired,

import Student from "./Student"

function App() {
  return (
    <>
      <Student name="Spongebob" age={20} isStudent={true} />
      <Student name="Patrick" age={25} isStudent={false} />
      <Student name="Sandy" age={22} isStudent={true} />
      <Student name="Squidward" age={27} isStudent={false} />
      <Student />
    </>
  )
}  

export default App
