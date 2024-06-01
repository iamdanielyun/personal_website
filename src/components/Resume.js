import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Resume() {
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
                <div className="resume">
                    
                    {/************************************************************ Education *****************************************************/}
                    <div className="resume-education">
                        <p className="heading">Education</p>
                        <hr />

                        <div className="resume-education-item">
                            <div className="resume-education-heading">
                                <b className="resume-education-heading-school">Rensselaer Polytechnic Institute</b>
                                <p className="resume-education-heading-major">B.S. in Computer Science | GPA: 3.6</p>
                            </div>
                            <p className="resume-education-date">Aug 2022 - Dec 2025</p>
                        </div>
                    </div>

                    {/************************************************************ Experience *****************************************************/}
                    <div className="resume-education">
                        <p className="heading">Experience</p>
                        <hr />

                        {/* CACI */}
                        <div className="resume-experience-item">
                            <div className="resume-education-heading">
                                <b className="resume-education-heading-school">Software Engineer Intern</b>
                                <p className="resume-education-heading-major"><Link to={"https://caci.com/"} target="_blank">CACI</Link></p>
                                
                                <ul className="resume-experience-list">
                                    <li>
                                        Developed a financial planning application to manage contract-personnel relationships
                                    </li>
                                    <li>
                                        Flask/SQL backend + React frontend to efficiently manage relational data                         
                                    </li>
                                    <li>
                                        In progress...                      
                                    </li>
                                </ul>
                            </div>
                            
                            <p className="resume-education-date">May 2024 - Present</p>
                        </div>

                        {/* Paraxial */}
                        <div className="resume-experience-item">
                            <div className="resume-education-heading">
                                <b className="resume-education-heading-school">AI/ML Research Intern</b>
                                <p className="resume-education-heading-major"><Link to={"https://paraxialtech.com/"} target="_blank">Paraxial Tech</Link></p>
                                
                                <ul className="resume-experience-list">
                                    <li>
                                        Generated relevant data by running scripts on real cases containing lung CT scans
                                    </li>
                                    <li>
                                        Leveraged visualization tools such as <Link to={"https://www.paraview.org/"} target="_blank">Paraview</Link>   
                                        &nbsp;to further analyze and filter the data                        
                                    </li>
                                    <li>
                                        In progress...                      
                                    </li>
                                </ul>
                            </div>
                            
                            <p className="resume-education-date">Mar 2024 - Present</p>
                        </div>

                        {/* AfterFlea AIOS */}
                        <div className="resume-experience-item">
                            <div className="resume-education-heading">
                                <b className="resume-education-heading-school">Software Engineer Intern</b>
                                <p className="resume-education-heading-major"><Link to={"https://afterflea.com/"} target="_blank">AfterFlea AIOS</Link></p>
                                
                                <ul className="resume-experience-list">
                                    <li>
                                        Leveraged OpenAI API and LLM Chains to help autogenerate conversations between different personas
                                    </li>
                                    <li>
                                        Developed Mongoose schemas and RESTful API routes to support backend services using Node.js and Express.js                           
                                    </li>
                                    <li>
                                        Implemented new styling and features for the user interface using React.js
                                    </li>
                                    <li>
                                        CI/CD using Git + Docker
                                    </li>
                                </ul>
                            </div>
                            
                            <p className="resume-education-date">Jan 2024 - Mar 2024</p>
                        </div>

                        {/* CSSI */}
                        <div className="resume-experience-item">
                            <div className="resume-education-heading">
                                <b className="resume-education-heading-school">Computer Science Summer Institute</b>
                                <p className="resume-education-heading-major"><Link to={"https://google.com/"} target="_blank">Google</Link></p>

                                <ul className="resume-experience-list">
                                    <li>
                                        Configured individual coding projects by using concepts such as variables, data types, functions and REST APIs
                                    </li>
                                    <li>
                                        Delivered a collaborative final project presentation to Google software engineers and program leaders
                                    </li>
                                    <li>
                                        Attended product design, resume development, and software engineering interview workshops
                                    </li>
                                </ul>
                            </div>
                            
                            <p className="resume-education-date">Jun 2022 - Aug 2022</p>
                        </div>
                    </div>

                    {/************************************************************ Technical Skills *****************************************************/}
                    <div className="resume-skills">
                        <p className="heading">Technical Skills</p>
                        <hr />

                        <ul>
                            <li>
                                <b>Programming Languages:</b>  &nbsp;
                                <span>C, C++, Python, SQL, Java, JavaScript, HTML, CSS</span>
                            </li>
                            <li>
                                <b>Frameworks:</b>  &nbsp;
                                <span>Springboot, React, Express, Node, Flask, Django, PostgreSQL, mySQL, mongoDB</span>
                            </li>
                            <li>
                                <b>Dev Tools:</b>  &nbsp;
                                <span>Github, AWS, Postman, VSCode, Linux</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Resume;