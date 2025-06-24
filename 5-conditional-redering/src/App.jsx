// conditional rendering = allows you to control what gets rendered
//                         in your application based on certain condition
//                         (show, hide, or change components)

import UserGreeting from "./UserGreeting"
import PropTypes from "prop-types"


function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Anass Code"/>
    </>
  )
}  

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired
}

export default App
