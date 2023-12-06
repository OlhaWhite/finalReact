import Slider from "../carousel";
import '../App.css';
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";


function Home() {
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
        <div>
            <hr></hr>
        <h1 className="header">Welcome To O.W. Remodel New York</h1>
        <hr></hr>
        <div className="main-section">
        <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvdXNlJTIwZGVzaWdufGVufDB8fDB8fHww" alt="main"></img>
        <div className="text">
        <h3 className="home-h3">Your one-stop shop for a full house remodelling</h3>
        <p>Welcome to O.W. Remodel in New York, where craftsmanship meets innovation. With a passion for building excellence, we transform visions into solid foundations. Our skilled team brings years of experience to every project, ensuring precision and efficiency from concept to completion. As a customer-centric construction company, we prioritize communication and transparency, keeping you informed at every stage. From residential remodels to commercial construction, we pride ourselves on delivering top-tier quality within deadlines. Trust us to bring your dreams to life, utilizing cutting-edge techniques and sustainable practices. Choose Us for a seamless construction experience that exceeds expectations.
</p>
<button className="about-btn" onClick={() => navigate('/contact')}>Get Your Free Estimate Today</button>
</div>
        </div>
            <hr></hr>
        <h3 className="header">Our team handles everything, from initial design to the final finishes for your kitchen.</h3>
        <hr></hr>
        <div>
        <Slider/>
        </div>
</div>
    )
}

export default Home;