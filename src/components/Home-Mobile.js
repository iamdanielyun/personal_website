import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import profile_image from "../icons/profile_image.jpeg";
import Home from "./Home";
// import profile_image from "https://danielyun.onrender.com/static/media/profile_image.c621a703a7b5ebf5d4ff.jpeg";

function Home_Mobile() {

    return (
        <div className="home">
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 1}}
                style={{
                    alignItems: "center",
                    height: "100vh",
                    willChange: 'transform',  
                    transformOrigin: 'center center',
                }}
            >
                {/* <Navbar /> */}
                
                {/* Profile Image */}
                    {/* <ul className="profile">
                        <li className="profile_image_container">
                            <img src={profile_image} className="profile_image"></img>
                        </li>
                        <li className="description">
                            <center><b className="greeting">HELLO!</b></center>
                            <br />

                            I'm currently an undergraduate student studying computer science at 
                            <Link to={"https://www.rpi.edu/"} target="_blank"> Rensselaer Polytechnic Institute </Link> 
                            (RPI). Over the Fall 2023 semester, I worked in a team of 5 members developing a discord
                            bot for <Link to={"https://hackrpi.com/"} target="_blank"> HackRPI</Link>
                            , where my particular role was to implement a ticket system that would allow mentors
                            at the hackathon to help teams in an orderly manner. We additionally worked on building the frontend
                            of HackRPI using React.

                            <br /> <br />

                            Aside from that, I'm just another student who enjoys lifting, spending time with friends,
                            and meeting new people. Welcome <i class="fa-regular fa-face-smile-beam"></i>
                        </li>
                    </ul> */}
                    <div className="profile">

                        <center><img src={profile_image} className="profile_image"></img></center> 

                        <p className="description">

                            <center><b className="greeting">HELLO!</b></center>
                            <br />

                            I am an undergraduate student studying computer science at 
                            <Link to={"https://www.rpi.edu/"} target="_blank"> Rensselaer Polytechnic Institute </Link> 
                            (RPI). Currently, I am working as a Full Stack Intern at 
                            <Link to={"https://afterflea.com/"} target="_blank"> AfterFlea AiOS </Link>,
                            engaging in tasks such as generating conversations between 
                            <Link to={"https://personanet.app/"} target="_blank"> personas </Link> and enhancing the 
                            user interface. My experience here has genuinely opened my eyes to power of AI 
                            and the sheer potential of this field. 

                            <br /> <br />

                            Aside from that, I'm just another student who enjoys lifting, spending time with friends,
                            and meeting new people. 
                            
                            <br /> <br />
                            <b>Welcome <i class="fa-regular fa-face-smile-beam"></i></b>
                        </p>
                    </div>
            </motion.div>
            {/* <Footer/> */}
        </div>
    )
}

export default Home_Mobile;