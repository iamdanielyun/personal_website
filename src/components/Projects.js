import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import video from "../icons/Untitled.mov";
import social_network from "../icons/social_network.png";
import todo_app from "../icons/todo_app.png";

function Projects(props) {
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
                <div className="projects">
                    <p className="heading">Projects</p>
                    <hr />

                    {/* Stock Simulation */}
                    <div className="project">
                        <div className="project-heading">
                            <b className="project-heading-title">Stock Simulation</b>
                            <i className="project-heading-languages">MongoDB, Express.js, React.js, Node.js (MERN)</i>
                        </div>
                        
                        <ul className="project-list">
                            <li>
                                Configured a full stack MERN application that simulates the stock trading experience
                            </li>
                            <li>
                                Allows users to query for ∼100,000 stocks listed across multiple stock exchanges (NASDAQ, NYSE, AMEX, etc.)
                            </li>
                            <li>
                                <Link to={"https://stocksimulationv2.onrender.com/"} target="_blank">View Site</Link>
                            </li>
                            <li>
                                <Link to={"https://github.com/iamdanielyun/Stock-Simulation-V2"} target="_blank">
                                    Code
                                </Link>
                            </li>
                        </ul>

                        <div className="project-image">
                            <center>
                                <video className="images" controls autoPlay>
                                    <source src={video} type="video/mp4"/>
                                </video>
                            </center>
                        </div>
                    </div>

                    {/* Day Planner*/}
                    <div className="project">
                        <div className="project-heading">
                            <b className="project-heading-title">Day Planner</b>
                            <i className="project-heading-languages">Node.js, Express.js, MongoDB, EJS, CSS</i>
                        </div>
                        
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
                        </ul>

                        <div className="project-image">
                            <center>
                                <img className="images" src={todo_app}></img>
                            </center>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-heading">
                            <b className="project-heading-title">Social Network</b>
                            <i className="project-heading-languages">Python, Django, JavaScript, SQL, HTML/CSS</i>
                        </div>
                        
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
                        </ul>

                        <div className="project-image">
                            <center>
                                <img id="last-image" className="images" src={social_network}></img>
                            </center>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Projects;