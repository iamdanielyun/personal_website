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
                    
                    <div className="resume-experience">
                        <p className="heading">Experience</p>
                        <hr />

                        {/* CACI */}
                        <ul className="experience-heading">
                            <li>
                                <b className="school">Software Engineer Intern</b>  
                                <br />
                                <i className="major"><Link to={"https://caci.com/"} target="_blank">CACI</Link></i>
                            </li>
                            
                            <li className="date">
                                May 2024 - Aug 2024
                            </li>
                        </ul>

                        <ul className="experience-list">
                            <li>
                                Developed a financial planning tool that streamlined tracking charges and hours for <b>5,000+</b>
                                employees, reducing time spent on manual workload by <b>~35%</b> per biweekly period, saving managers
                                <b>5+</b> hours/week
                            </li>
                            <li>
                                Strategically leveraged <b>Python</b> and <b>SQL</b> to design a scalable <b>data</b> model and 
                                <b>20+ RESTful</b> API endpoints, tested rigorously using <b>Unittest</b> and <b>Postman, </b>
                                optimizing processing speed and memory usage by <b>∼23%</b>                     
                            </li>
                            <li>
                                Crafted a user-friendly frontend utilizing <b>React.js</b> and <b>Material UI,</b> enhancing user experience and 
                                visual appeal, also reducing development time by <b>∼25%</b> using reusable components
                            </li>
                        </ul>

                        {/* Paraxial */}
                        {/* <ul className="experience-heading">
                            <li>
                                <b className="school">AI/ML Research Intern</b>  
                                <br />
                                <i className="major"><Link to={"https://paraxialtech.com/"} target="_blank">Paraxial Tech</Link></i>
                            </li>
                            
                            <li className="date">
                                Mar 2024 - Present
                            </li>
                        </ul>

                        <ul className="experience-list">
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
                        </ul> */}

                        {/* AfterFlea AIOS */}
                        <ul className="experience-heading">
                            <li>
                                <b className="school">Software Engineer Intern</b>  
                                <br />
                                <i className="major"><Link to={"https://afterflea.com/"} target="_blank">AfterFlea AiOS</Link></i>
                            </li>
                            
                            <li className="date">
                                Jan 2024 - Apr 2024
                            </li>
                        </ul>

                        <ul className="experience-list">
                            <li>
                                Engineered a scalable social media platform driven by artificial personas representing users, increasing user 
                                engagement by <b>~20%</b> through personalized interactions between <b>100+</b> personas                                    
                            </li>
                            <li>
                                Designed and implemented <b>MongoDB</b> schemas and <b>15+ Express.js</b> API endpoints, optimizing backend 
                                workflows and reducing query response time by <b>~18%</b>
                            </li>
                            <li>
                                Built a responsive landing page using <b>React.js</b>, ensuring seamless navigation across <b>30+</b> communities 
                            </li>
                            <li>
                                Collaborated with a lead ML engineer to integrate <b>OpenAI</b>, generating <b>200+</b> persona-driven conversations,
                                boosting user retention by <b>~14%</b> through real-time interactions
                            </li>
                            <li>
                                Participated in <b>CI/CD</b> pipeline integration, resolving <b>10+</b> merge conflicts and reducing build failure rates 
                                by <b>~15%</b>, gaining comprehensive knowledge on the <b>Software Development Life Cycle (SDLC)</b>
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
                                Configured individual coding projects by using concepts such as variables, data types, functions and <b>REST</b> APIs
                            </li>
                            <li>
                                Delivered a collaborative final project presentation to Google software engineers and program leaders
                            </li>
                            <li>
                                Attended product design, resume development, and software engineering interview workshops
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
                                <i className="skill">C, C++, Python, SQL, Java, JavaScript, HTML, CSS</i>
                            </li>
                            <li>
                            <b>Frameworks:</b>  &nbsp;
                                <i className="skill">Springboot, React, Express, Node, Flask, Django, PostgreSQL, mySQL, mongoDB</i>
                            </li>
                            <li>
                            <b>Dev Tools:</b>  &nbsp;
                                <i className="skill">Git, AWS, Postman, VSCode, Linux</i>
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