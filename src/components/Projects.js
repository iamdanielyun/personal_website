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
                            <li>
                                <video id="first-image" className="images" controls autoPlay>
                                    <source src={video} type="video/mp4"/>
                                </video>
                            </li>
                        </ul>

                        <ul className="project-list">
                            <li>
                                Configured a full stack MERN application that simulates the stock trading experience
                            </li>
                            <li>
                                Allows users to query for ∼100,000 stocks listed across multiple stock exchanges (NASDAQ, NYSE, AMEX, etc.)
                            </li>
                            <li>
                                Utilized third party services such as <Link to={"https://twelvedata.com/"} target="_blank" style={{color: "black"}}>TwelveData </Link> 
                                to provide real-time stock quotes and company news
                            </li>
                            <li>
                                Deployed the frontend on <Link to={"https://render.com/"} target="_blank" style={{color: "rgb(63, 63, 202)"}}>Render </Link>
                            </li>
                            <li>
                                Deployed the backend on <Link to={"https://vercel.com/"} target="_blank" style={{color: "rgb(63, 63, 202)"}}>Vercel </Link>
                            </li>
                            <li>
                                <Link to={"https://stocksimulation.onrender.com/"} target="_blank" style={{color: "rgb(63, 63, 202)"}}>View Site</Link>
                            </li>
                            <li>
                                <Link to={"https://github.com/iamdanielyun/stock-simulation"} target="_blank">
                                    Code
                                </Link>
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
                            <li>
                                <img className="images" src={todo_app}></img>
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
                        </ul>

                        {/* Social Network */}
                        <ul className="experience-heading">
                            <li>
                                <b className="school">
                                    Social Network
                                </b> 
                                <br />
                                <i className="languages">Python, Django, JavaScript, SQL, HTML/CSS </i>
                            </li>
                            <li>
                                <img id="last-image" className="images" src={social_network}></img>
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
                        </ul>

                    </div>
                </div>
            </motion.div>
            {/* <Footer /> */}
        </div>
    )
}

export default Projects;