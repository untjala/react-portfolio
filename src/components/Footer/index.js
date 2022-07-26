import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import './style.css'
function Footer() {
    return (
    <div className="footer-container">
    <footer className="footer">
        <h1>Jala Unterreiner</h1>
    </footer>
    <div className="icon">
        <a href="https://www.linkedin.com/in/jala-unterreiner-05171b246/">
            <FaLinkedin size={32} color={"white"} />
        </a>
        <a href="https://github.com/untjala" >
            <FaGithub size={32} color={"white"}/>
        </a>
    </div>
    </div>
    )
}

export default Footer