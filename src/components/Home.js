import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import profile_image from "../icons/profile_image.jpeg";
import gym from "../icons/gym.jpg";
import food from "../icons/texas_de_brazil.jpg";
import thumbs_up from "../icons/thumbs_up.jpg";

function Home(props) {
    const images = [thumbs_up, gym, food];
    const [img_index, setImg_index] = useState(0);
    const handleNext = () => {
        setImg_index((prevIndex) => (prevIndex + 1) % images.length); // Loop to the first image if we reach the end
    };
    
    const handlePrev = () => {
        setImg_index((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
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
                {/* <div className="profile_image_container">
                    <img src={profile_image} className="profile_image"></img>
                </div> */}
            
                <div className="profile_image_container">
                    <div className="image_slider">
                        {/* <img src={thumbs_up} alt="Profile" className="profile_image" />
                        <img src={gym} alt="Another" className="profile_image" />
                        <img src={food} alt="Yet Another" className="profile_image" /> */}
                        <img
                            src={images[0]}     //thumbs-up image
                            alt="Displayed"
                            className="profile_image"
                        />
                    </div>
                    {/* <button className="prev_button" onClick={handlePrev}>
                        ← Prev
                    </button>
                    <button className="next_button" onClick={handleNext}>
                        Next →
                    </button> */}
                </div>

                <div className="description">
                    <center><b className="greeting">HELLO!</b></center>
                    <br />

                    I am an undergraduate student studying computer science
                    at <Link to={"https://www.rpi.edu/"} target="_blank"> 
                        Rensselaer Polytechnic Institute  
                    </Link> (RPI). I love learning new technologies and skills (not necessarily tech-related)
                    and trying new things. Feel free to check out my <Link to={"/projects"} target="_blank"> projects!</Link>
                    
                    <br /> <br />

                    When I'm not at my desk studying, you'll likely find me at the gym, eating (I love food) or 
                    spending time with friends. I've also started cooking my own meals - 
                    please <Link to={"mailto:dsy3712@gmail.com"}>reach out</Link> if you know any good recipes!!
                    
                    {/* Currently, I am working as a Software Engineer Intern at&nbsp; 
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
                    and meeting new people.  */}
                    
                    <br /> <br />
                    <b>Welcome <i class="fa-regular fa-face-smile-beam"></i></b>
                </div>
                
            </motion.div>
            {/* <Footer/> */}
        </div>
    )
}

export default Home;