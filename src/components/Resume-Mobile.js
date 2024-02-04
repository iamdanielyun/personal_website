import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Resume_Mobile() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 1 }}
                style={{
                    alignItems: "center",
                    willChange: 'transform',  
                    transformOrigin: 'center center',
                }}
            >
                {/* <Navbar /> */}
                <div className="resume">
                    
                    {/************************************************************ Education *****************************************************/}
                    <div className="resume-education">
                        <p className="heading">Education</p>
                        <hr />

                        <ul>
                            <li>
                                <b className="school">Rensselaer Polytechnic Institute</b>  
                                <br /> 
                                <i className="major">B.S. in Computer Science</i>
                            </li>
                            <br />
                            <li className="date">
                                Aug 2022 - Dec 2025
                            </li>
                        </ul>
                    </div>

                    {/************************************************************ Experience *****************************************************/}
                    
                    {/* RCOS */}
                    <div className="resume-experience">
                        <p className="heading">Experience</p>
                        <hr />
                        
                        <ul className="experience-heading">
                            <li>
                                <b className="school">Full Stack Intern</b>  
                                <br />
                                <i className="major"><Link to={"https://afterflea.com/"} target="_blank">AfterFlea AiOS</Link></i>
                            </li>
                            
                            <li className="date">
                                Jan 2024 - Present
                            </li>
                        </ul>

                        <ul className="experience-list">
                            <li>
                                Interacted with OpenAI API to help automate the process of generating conversations between two personsas in
                                different communities
                            </li>
                            <li>
                                Developed Mongoose schemas and RESTful API routes to support Backend services using Node.js                            
                            </li>
                            <li>
                                Utilized React.js to implement new styling and features for the user interface
                            </li>
                            <li>
                                Followed good Git practices by frequently creating new branches and Pull Requests                            
                            </li>
                        </ul>

                        {/* Google CSSI */}
                        <ul className="experience-heading">
                            <li>
                                <b className="school">
                                    Computer Science Summer Institute  
                                </b>  
                                <br />
                                <i className="major">Google</i>
                            </li>
                            
                            <li className="date">
                                Jun 2022 - Aug 2022
                            </li>
                        </ul>

                        <ul className="experience-list">
                            <li>
                                Configured individual coding projects by using concepts such as variables, data types, functions and REST APIs
                            </li>
                            <li>
                                Delivered a collaborative final project presentation in front of Google software engineers and program leaders
                                utilizing core concepts we learned in HTML, CSS and JavaScript
                            </li>
                            <li>
                                Attended product design, resume development, and software engineering interview workshops
                            </li>
                            <li>
                                <Link to={"https://drive.google.com/file/d/1ze5h-qJC_spPxDKYBmrlY4Z_hbxVjiwh/view"} target="_blank">
                                    Certificate of Completion
                                </Link>
                            </li>
                        </ul>
                        
                    </div>

                    {/************************************************************ Technical Skills *****************************************************/}
                    <div className="resume-skills">
                        <p className="heading">Technical Skills</p>
                        <hr />

                        <ul>
                            <li>
                                <b>Programming Languages:</b>  &nbsp;
                                <i className="skill">C, C++, Python, SQL, JavaScript, HTML, CSS</i>
                            </li>
                            <li>
                            <b>Frameworks:</b>  &nbsp;
                                <i className="skill">React, Express, Node, Flask, Django, mySQL, mongoDB</i>
                            </li>
                            <li>
                            <b>Dev Tools:</b>  &nbsp;
                                <i className="skill">Github, Render, Vercel, VSCode, Linux</i>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
            {/* <Footer /> */}
        </div>
    )
}

export default Resume_Mobile;