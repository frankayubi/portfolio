// Importing the GitHub and LinkedIn icons rom react-icons/fa and an avatar image from the assets folder
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/Software.png';

// Defining the Body functional component
const Body = () => {
    return (
        // Main container for the body section
        <div id="body" className="body">
            <div className="body-container">

               {/* Profile section containing the avatar, name, title, and social icons */}
                <div className="body-profile">
                    <img className="body-img" alt='avatar' src={Avatar} />

                    {/* Container for user details */}
                    <div className="body-content">
                        <div className="body-headline">Frank Yubi</div>
                        <div className="body-text">Software Engineer</div>
                    </div>

                    {/* Social media icons */}
                    <div className="body-icons">
                        <a href="https://www.educative.io/" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.educative.io/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;