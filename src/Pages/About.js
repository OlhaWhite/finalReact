import { useEffect } from 'react';
import '../App.css';
import { useNavigate} from 'react-router-dom';
import gsap from 'gsap';
import GroupExample from '../groupCards';


function About() {
    const navigate = useNavigate();
    useEffect(() => {
        let Animate = gsap.timeline();
    Animate.fromTo('.header', 
    {y: 100,
    opacity: 0}, 
    {y:0,
     opacity: 1,
     stagger: 0.05,
     duration: 2,
    ease: "power1.out"});
}, []);
    return(
        <div className='container'>
            <div>
                <hr></hr>
                <h1 className='header'>About Us</h1>
                <hr></hr>
                <div className="container-about">
                    <div className="about-image">
                    <img className='image-about' src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRlYW18ZW58MHx8MHx8fDA%3D" alt="persons"/>
                    </div>
                    <div className="about-text">
                        <p>As a seasoned construction professionals, We bring a robust blend of expertise and hands-on experience to every project.
                        With a proven track record in construction business, We are dedicated to delivering top-notch craftsmanship and ensuring the success of each endeavor. Diligent, detail-oriented, and safety-focused, We thrive in dynamic environments, contributing to efficient project execution. Our commitment to quality workmanship, coupled with a collaborative spirit, makes us an asset to any construction project.
                        Hire Us, and let's construct success together, one project at a time.</p>
                        <button className="about-btn" onClick={() => navigate('/contact')}>Get Your Free Estimate Today</button>
                        </div>
                        </div>
            </div>
            <div>
                <h2 className='header mt-3 mb-3'>Home remodeling process</h2>
            </div>
            <div>
                <GroupExample/>   
            </div>
        </div>
    )
}
export default About;