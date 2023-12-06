import { useEffect, useState } from "react";
import { data } from "../images";
import Buttons from "../buttons";
import gsap from "gsap";

function Portfolio() {
  const [portfolio, setPortfolio] = useState(data);
  const chosenRoom = (name) => {
    const newRoom = data.filter(element => element.name === name);
    setPortfolio(newRoom);
  }
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
        <h1 className="header">Portfolio</h1>
        <hr></hr>
        <div className="portfolio-buttons">
        <Buttons filteredRoom = {chosenRoom}/>
        </div>
        <div className="portfolio">
        {portfolio.map((element => {
            const {id, image} = element;
            return(
                <div>
                <div className="portfolio-card" key={id}>
                    {image}
                </div>
                <div className="portfolio-info">
                {/* <h4>{name}</h4> */}
                </div>
                </div>
            )
        }))}
   
      </div>
      </div>
    )
}
export default Portfolio;