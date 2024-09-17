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
                                        <b>Spearheaded</b> the development of a financial planning application using a <b>Flask/SQL</b> backend and <b>React</b>
                                        frontend, efficiently managing tasks and charges for over <b>20,000</b> CACI employees across various contracts
                                    </li>
                                    <li>
                                        Reduced project managers’ manual workload by <b>50%</b>∼, streamlining operations and increasing overall efficiency                         
                                    </li>
                                    <li>
                                        Directly collaborated with managers and <b>stakeholders</b> to find efficient solutions to issues that arose
                                    </li>
                                </ul>
                            </div>
                            
                            <p className="resume-education-date">May 2024 - Present</p>
                        </div>

                        {/* Paraxial */}
                        {/* <div className="resume-experience-item">
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
                        </div> */}

                        {/* AfterFlea AIOS */}
                        <div className="resume-experience-item">
                            <div className="resume-education-heading">
                                <b className="resume-education-heading-school">Software Engineer Intern</b>
                                <p className="resume-education-heading-major"><Link to={"https://afterflea.com/"} target="_blank">AfterFlea AIOS</Link></p>
                                
                                <ul className="resume-experience-list">
                                    <li>
                                        Optimized <b>API</b> endpoints for efficient data retrieval and manipulation, reducing response times by up to <b>15%</b>
                                    </li>
                                    <li>
                                        Leveraged <b>OpenAI API</b> to strategically autogenerate <b>200+</b> conversations between various <Link to={"https://afterflea.com/"}>personas</Link>
                                    </li>
                                    <li>
                                        Enhanced <b>UI</b> design and functionality by leading the implementation of new styling and features using <b>React</b> and <b>TypeScript</b>
                                    </li>
                                </ul>
                            </div>
                            
                            <p className="resume-education-date">Jan 2024 - Apr 2024</p>
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
                                <span>C, C++, Python, SQL, Java, JavaScript, HTML/CSS</span>
                            </li>
                            <li>
                                <b>Frameworks:</b>  &nbsp;
                                <span>Spring Boot, React.js, Express.js, Node.js, Flask, Django, PostgreSQL, mongoDB</span>
                            </li>
                            <li>
                                <b>Dev Tools:</b>  &nbsp;
                                <span>Github, JUnit, AWS, Postman, VSCode, Linux</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Resume;