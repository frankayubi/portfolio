import IMG from '../assets/Detective.png';
import MTLogo from '../assets/mtbank-logo.png';
import QAimereLogo from '../assets/qaimere-logo.png';
import ChubbLogo from '../assets/chubb-logo.png';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-container">
                <div className="about-info">
                    {/* Left Side: Bio and Experience */}
                    <div className="about-left">
                        <p className="about-desc">
                            Hi, I'm Frank Yubi. I recently finished my Computer Science degree at NJIT. 
                            I have hands-on experience building backend services and optimizing code. 
                            I enjoy the challenge of solving complex problems behind the scenes and 
                            I'm currently looking for a full-time Software Engineering position to 
                            put my skills to work.
                        </p>

                        <div className="experience-list">
                            <div className="experience-item">
                                <img src={MTLogo} alt="M&T Bank" className="exp-logo" />
                                <div className="exp-text">
                                    <h3>M&T Bank</h3>
                                    <p>Software Engineering Intern</p>
                                </div>
                            </div>
                            <div className="experience-item">
                                <img src={QAimereLogo} alt="QAimere" className="exp-logo" />
                                <div className="exp-text">
                                    <h3>QAimere Technologies</h3>
                                    <p>Developer</p>
                                </div>
                            </div>
                            <div className="experience-item">
                                <img src={ChubbLogo} alt="Chubb" className="exp-logo" />
                                <div className="exp-text">
                                    <h3>Chubb</h3>
                                    <p>Data Engineer Intern</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Detective Image */}
                    <div className="about-right">
                        <div className="about-img-wrapper">
                            <img src={IMG} alt="Detective" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;