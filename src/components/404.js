import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function NotFound(props) {

    return (
        <div className="route">
            <Navbar />
                <center>
                    Nothing here. Return <Link to={"/"}>home</Link>
                </center>
            <Footer />
        </div>
    )
}

export default NotFound;