import profilePic from "./assets/profile.jpg"

function Card () {
    return(
        <div className="card">
            <img src={profilePic} alt="profile" className="card-image" />
            <h2 className="card-title">Anass Code</h2>
            <p className="card-text">Full Stack Developer</p>
        </div>
    );
}

export default Card;