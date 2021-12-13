import {Component} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class Home extends Component{
    render(){
        return <div>
            <Header/>
            
            <div className="home-desktop-container">
            
            <div className="profile-intro-container">
            <img src="https://res.cloudinary.com/dxv46yb6u/image/upload/v1626496458/29426054_901717306654569_2836317855916490752_n_va68zq.jpg" alt="profile" className="profile-image"/>
            <div className="intro-container">
                <h1 className="hello">Hello</h1>
                <h1 className="bit-about">A Bit About Me</h1>
                <p className="intro">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <ul className="intro-list-container">
                    <Link to="/resume">
                    <li className="resume-item-container">
                        <p>Resume</p>
                    </li>
                    </Link>
                    <Link to="/projects">
                    <li className="projects-item-container">
                        <p>Projects</p>
                    </li>
                    </Link>
                    <Link to="/contact">
                    <li className="contact-item-container">
                        <p>Contact</p>
                    </li>
                    </Link>
                    
                   
                </ul>

            </div>
            </div>
                 
            </div>
            <hr className="desktop-line"/>
            <div className="mobile-home-container">
                <h1>Hello</h1>
                <p className="abit-text-mobile">A Bit About Me</p>
                <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <ul className="mobile-home-items-container">
                    <li className="mobile-resume-item">
                        Resume
                    </li>
                    <li className="mobile-projects-item">
                        Projects
                    </li>
                    <li className="mobile-contact-item">
                        Contact
                    </li>

                </ul>
                <div className="mobile-profile-container">
                <img src="https://res.cloudinary.com/dxv46yb6u/image/upload/v1626496458/29426054_901717306654569_2836317855916490752_n_va68zq.jpg" alt="profile" className="mobile-profile-image"/>
                </div>
                <hr/>
            
            
                
                
            </div>
            <Footer/>
        </div>
    }
}

export default Home