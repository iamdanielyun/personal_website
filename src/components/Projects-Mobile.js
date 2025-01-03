import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import mySNS from "../icons/mySNS.png";
import video from "../icons/Untitled.mov";
import social_network from "../icons/social_network.png";
import todo_app from "../icons/todo_app.png";

function Projects_Mobile() {
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
                    <div className="projects">
                        <p className="heading">Projects</p>
                        <hr />

                        {/* Stock Simulation */}
                        <ul className="experience-heading">
                            <li>
                                <b className="school">
                                    Stock Simulation
                                </b>  
                                <br />
                                <i className="languages">MongoDB, Express.js, React.js, Node.js (MERN)</i>
                            </li>
                        </ul>

                        <ul className="project-list">
                            <li>
                                Developed a <b>MERN</b> stack application that simulates the stock market trading experience
                            </li>
                            <li>
                                Enabled users to query for <b>∼100,000</b> stocks listed across multiple exchanges (NASDAQ, NYSE, AMEX, etc.)
                            </li>
                            <li>
                                Integrated <b>real-time</b> news updates and company histories to provide users with detailed market insights
                            </li>
                            <li>
                                <Link to={"https://stocksimulationv2.onrender.com/"} target="_blank">View Site</Link>
                            </li>
                            <li>
                                <Link to={"https://github.com/iamdanielyun/Stock-Simulation-V2"} target="_blank">
                                    Code
                                </Link>
                            </li>
                            <li>
                                <center>
                                <video id="first-image" className="images" controls autoPlay>
                                    <source src={video} type="video/mp4"/>
                                </video>
                                </center>
                            </li>
                        </ul>

                        {/* MySNS */}
                        <ul className="experience-heading">
                            <li>
                                <b className="school">
                                    My SNS
                                </b> 
                                <br />
                                <i className="languages">Spring Boot, React.js, PostgreSQL, Docker</i>
                            </li>
                        </ul>

                        <ul className="project-list">
                            <li>
                                Created a comprehensive SNS platform that facilitates robust and scalable user interactions
                            </li>
                            <li>
                                Enabled user-generated content creation, promoting dynamic social engagement
                            </li>
                            <li>
                                <Link to={"https://mysns.onrender.com/"} target="_blank">View Site</Link>
                            </li>
                            <li>
                                <Link to={"https://github.com/iamdanielyun/mySNS"} target="_blank">
                                    Code
                                </Link>
                            </li>
                            <li>
                                <img className="images" src={mySNS}></img>
                            </li>
                        </ul>
                        
                        {/* Day Planner */}
                        <ul className="experience-heading">
                            <li>
                                <b className="school">
                                    Day Planner
                                </b> 
                                <br />
                                <i className="languages">Node.js, Express.js, MongoDB, EJS, CSS</i>
                            </li>
                        </ul>

                        <ul className="project-list">
                            <li>
                                Developed a backend-focused application that allows users to plan out their days
                            </li>
                            <li>
                                Allows users to create tasks for today as well as for the future
                            </li>
                            <li>
                                Utilized express-session to create sessions and cookies to authenticate users
                            </li>
                            <li>
                                Explored the concept of nested collections through Mongoose schemas
                            </li>
                            <li>
                                Updated and retrieved data using MongoDB Atlas
                            </li>
                            <li>
                                <Link to={"https://github.com/iamdanielyun/Todo_App"} target="_blank">
                                    Code
                                </Link>
                            </li>
                            <li>
                                <img className="images" src={todo_app}></img>
                            </li>
                        </ul>

                        {/* Social Network */}
                        {/* <ul className="experience-heading">
                            <li>
                                <b className="school">
                                    Social Network
                                </b> 
                                <br />
                                <i className="languages">Python, Django, JavaScript, SQL, HTML/CSS </i>
                            </li>
                        </ul>

                        <ul className="project-list">
                            <li>
                                Introductory project to fullstack web design
                            </li>
                            <li>
                                Allows users to create and like posts and follow other creators
                            </li>
                            <li>
                                Utilized ManytoMany models to represent the relationships between different 
                                users and posts
                            </li>
                            <li>
                                <Link to={"https://github.com/iamdanielyun/Social-Network"} target="_blank">
                                    Code
                                </Link>
                            </li>
                            <li>
                                <img id="last-image" className="images" src={social_network}></img>
                            </li>
                        </ul> */}

                    </div>
                </div>
            </motion.div>
            {/* <Footer /> */}
        </div>
    )
}

export default Projects_Mobile;