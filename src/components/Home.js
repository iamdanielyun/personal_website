import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import profile_image from "../icons/profile_image.jpeg";
// import profile_image from "https://danielyun.onrender.com/static/media/profile_image.c621a703a7b5ebf5d4ff.jpeg";

function Home(props) {

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
                <div className="profile_image_container">
                    <img src={profile_image} className="profile_image"></img>
                </div>

                <div className="description">
                    <center><b className="greeting">HELLO!</b></center>
                    <br />

                    I am an undergraduate student studying computer science at&nbsp; 
                    <Link to={"https://www.rpi.edu/"} target="_blank"> 
                        Rensselaer Polytechnic Institute  
                    </Link>
                    &nbsp;(RPI). Currently, I am working as a Software Engineer Intern at&nbsp; 
                    <Link to={"https://www.caci.com/"} target="_blank"> 
                        CACI 
                    </Link>
                    , as well as a research intern at&nbsp; 
                    <Link to={"https://www.paraxialtech.com/"} target="_blank"> 
                        Paraxial Tech 
                    </Link>
                    , collaborating on&nbsp; 
                    <Link to={"https://www.ielcap-airs.org/"} target="_blank"> 
                        I-ELCAP AIRS 
                    </Link> 
                    , an open source project dedicated to detect lung cancer more efficiently 
                    using Artificial Intelligence.

                    <br /> <br />

                    Aside from that, I'm just another student who enjoys lifting, spending time with friends,
                    and meeting new people. 
                    
                    <br /> <br />
                    <b>Welcome <i class="fa-regular fa-face-smile-beam"></i></b>
                </div>
            </motion.div>
            {/* <Footer/> */}
        </div>
    )
}

export default Home;