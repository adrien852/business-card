import twitterLogo from "../images/Twitter Icon.png"
import facebookLogo from "../images/Facebook Icon.png"
import instaLogo from "../images/Instagram Icon.png"
import gitHublogo from "../images/GitHub Icon.png"

export default function Footer(){
    return(
        <div className="footer">
            <a target="_blank" href="https://twitter.com"><img src={twitterLogo} /></a>
            <a target="_blank" href="https://www.facebook.com/"><img src={facebookLogo} /></a>
            <a target="_blank" href="https://www.instagram.com"><img src={instaLogo} /></a>
            <a target="_blank" href="https://github.com/adrien852"><img src={gitHublogo} /></a>
        </div>
    )
}