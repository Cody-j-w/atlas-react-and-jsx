import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

function SocialLinks() {
    return <div className="social-links">
        <a href="https://www.linkedin.com/in/cody-walenciak/"><img src={linkedin} alt="" /></a>
        <a href="https://github.com/Cody-j-w/atlas-react-and-jsx"><img src={github} alt="" /></a>
    </div>
}

export default SocialLinks;