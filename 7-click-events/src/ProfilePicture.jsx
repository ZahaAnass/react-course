import Pic from "./assets/react.svg"

function ProfilePicture(){

    const handleClick = () => console.log("Ouch");

    return(
        <img src={Pic} alt="profile" onClick={handleClick}/>
    )
}

export default ProfilePicture