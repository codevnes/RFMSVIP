import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./nav.scss";
import Logo from "/src/image/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <div className="container">
                <span></span>
                <div className="logo">
                    <Link to="/">
                        <img className="w-28" src={Logo} alt="logo" />
                    </Link>
                </div>
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/#">My work</a>
                    <a href="/#">Blog</a>
                    <a href="/#">About me</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
        </header>
    );
}

export default Navbar;