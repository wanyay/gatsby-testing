import React from "react"
import { Link } from "gatsby";


const Navbar = () => (
    <nav className="navbar navbar-expand-sm justify-content-center" style={{ backgroundColor: `purple`}}>
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/" style={{ color: `white`}}>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about" style={{ color: `white`}}>About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contact-us" style={{ color: `white`}}>Contact Us</Link>
            </li>
        </ul>
    </nav>
)

export default Navbar