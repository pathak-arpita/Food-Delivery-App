import NavBar from "./NavBar";
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'

const Author = () => {
    return (
        <div>
            <div className="resturant-menu-navbar">
                <NavBar />
            </div>
            <div className="author-container">
                <h1>ARPITA PATHAK</h1>
                <p>{<UilGithub />}<a href="https://github.com/pathak-arpita" target="_blank"><b>Github</b></a></p>
                <p>{<UilLinkedin />}<a href="https://www.linkedin.com/in/arpita-pathak-825a7a1b1" target="_blank"><b>LinkedIn</b></a></p>
            </div>
        </div >
    );
};

export default Author;
