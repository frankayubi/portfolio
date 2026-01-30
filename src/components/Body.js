import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa"; // Added download icon
import Avatar from '../assets/Software.png';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='avatar' src={Avatar} />

                    <div className="body-content">
                        <div className="body-headline">Frank Yubi</div>
                        <div className="body-text">Software Engineer</div>
                        
                    </div>

                    <div className="body-icons">
                        <a href="https://github.com/frankayubi" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.linkedin.com/frankayubi" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                    </div>

                        {/* New Download Button */}
                        <div className="body-cta">
                            <a 
                                href="/Franky_Yubi_Resume.pdf" 
                                className="download-btn" 
                                download="Franky_Yubi_Resume.pdf"
                            >
                                Download Resume <FaFileDownload style={{ marginLeft: '8px' }} />
                            </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Body;