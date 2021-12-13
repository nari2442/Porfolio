import { BsLinkedin } from "react-icons/bs"

import './index.css'


const Footer = ()=>(
    <div>
<ul className="footer-items-container">
<li className="phone-container">
    <h1>Phone</h1>
    <p>+91 9908921873</p>
</li>
<li className="email-container">
    <h1>Email</h1>
    <p>reddynarendra778@gmail.com</p>
</li>
<li className="follow-container">
    <h1>Follow Me</h1>
    <div className="social-media-container">
        <a href="https://www.linkedin.com/in/narendra-reddy-714587217/" target="_blank" rel="noreferrer">
        <BsLinkedin className="icon" />
        </a>
        
    </div>
</li>
<li className="created-container">
    <p>© 2021 By Narendra Reddy.</p>
    <p>Proudly created using React.Js</p>
</li>
    </ul>
    <ul className="footer-mobile-items">
                    <li className="footer-item">
                        <h1 className="footer-item-name">Phone
                        <br/><span className="footer-item-detail">+91 9908921873</span></h1>
                        
                    </li>
                    <li className="footer-item">
                        <h1 className="footer-item-name">Email
                        <br/><span className="footer-item-detail">reddynarendra778@gmail.com</span></h1>
                        
                       
                    </li>
                    <li className="footer-item">
                        <h1 className="footer-item-name">Follow Me</h1>
                        
                        <a href="https://www.linkedin.com/in/narendra-reddy-714587217/" target="_blank" rel="noreferrer">
        <BsLinkedin className="icon" />
        </a>
                        
                    </li>
                    <li>
                        <p>© 2021 By Narendra Reddy.
                        <br/><span>Proudly created using React.Js</span>
                        </p>
                        
                    </li>
                </ul>

    </div>
    
)

export default Footer