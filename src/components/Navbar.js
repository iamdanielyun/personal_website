import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="left-item">
                    <li key={"username"}>
                        <Link to={"/"}><strong><i class="fa-solid fa-d" style={{color: "#516485"}}></i>aniel Yun</strong></Link>
                    </li>
                </ul>
                <ul className="nav-list">
                    <li key={"home"}>
                        <Link to={"/"}><i class="fa-solid fa-house" style={{color: "#2f3b54", fontSize: "22px"}}></i></Link>
                    </li>
                    <li key={"resume"}>
                        <Link to={"/resume"}><i class="fa-regular fa-file" style={{color: "#2f3b54", fontSize: "22px"}}></i></Link>
                    </li>
                    <li key={"projects"}>
                        <Link to={"/projects"}><i class="fa-solid fa-desktop" style={{color: "#2f3b54", fontSize: "22px"}}></i></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;