import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Resume(props) {
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
                <Navbar />
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
                                <b className="school">Software Developer</b>  
                                <br />
                                <i className="major"><Link to={"https://new.rcos.io/"} target="_blank">Rensselaer Center for Open Source</Link></i>
                            </li>
                            
                            <li className="date">
                                Sep 2023 - Dec 2023
                            </li>
                        </ul>

                        <ul className="experience-list">
                            <li>
                                Developed the user interface of an established hackathon organization sponsored by 
                                multi-billion dollar corporations such as Google Cloud and IBM using React and Node
                            </li>
                            <li>
                                Configured a discord bot to implement a ticket system to allow hundreds of teams to enter a queue for help
                            </li>
                            <li>
                                Incorporated object-oriented programming concepts by implementing appropriate classes and 
                                utilizing necessary data structures to represent the queue
                            </li>
                            <li>
                                Practiced CI/CD cycles by committing and pushing code regularly using Git
                            </li>
                            <li>
                                Set up Github Workflow to automate testing and deploying
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
            <Footer />
        </div>
    )
}

export default Resume;