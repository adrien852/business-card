import profilePicture from "../images/pp2.png"
import About from "./About"
import Interests from "./Interests"

export default function Info(){
    return(
        <div className="info">
            <img src={profilePicture} />
            <div className="infoText">
                <h1>Adrien Durouge</h1>
                <h3>Fullstack Developer</h3>
                <p>adriendurouge.website</p>
            </div>
            <div className="buttons">
                <a target="_blank" href="mailto:durougeadrien@gmail.com"><button className="mail"><span></span>Email</button></a>
                <a target="_blank" href="https://www.linkedin.com/in/adrien-durouge-dev/"><button className="linkedin"><span></span>Linkedin</button></a>
            </div>
            <About />
            <Interests />
        </div>
    )
}