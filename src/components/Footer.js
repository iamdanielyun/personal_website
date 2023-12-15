import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <div>
            <footer className="footer">

                {/* Email and Contact Info */}
                <ul className="footer-left">
                    <li key={"email"}>
                        <strong>Contact Me</strong>  
                        <Link to={"mailto:dsy3712@gmail.com"}>dsy3712@gmail.com</Link>
                    </li>
                </ul>
                {/* Social Media */}
                <center>
                    <ul className="footer-middle">

                        {/* LinkedIn */}
                        <li key={"linkedin"}>
                            <Link to={"https://www.linkedin.com/in/daniel-yun-a5b4a9249/"} target="_blank">
                                <i id="linkedin" className="fa-brands fa-linkedin"></i>
                            </Link>
                        </li>

                        {/* Github */}
                        <li key={"github"}>
                            <Link to={"https://github.com/iamdanielyun"} target="_blank">
                                <i id="github" className="fa-brands fa-square-github"></i>
                            </Link>
                        </li>

                        {/* Facebook */}
                        <li key={"facebook"}>
                            <Link to={"https://www.facebook.com/daniel.yun.351756"} target="_blank">
                                <i id="facebook" className="fa-brands fa-square-facebook"></i>
                            </Link>
                        </li>

                    </ul>
                </center>
                {/* Copyright */}
                <ul className="footer-right">
                    <li key={"about"}>
                        © 2023 Daniel Yun
                    </li>
                </ul>
            </footer>
        </div>
      );
}

export default Footer;