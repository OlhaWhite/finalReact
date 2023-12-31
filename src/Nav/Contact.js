
import React, { useEffect, useState } from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../content_option";
import { useForm, ValidationError } from '@formspree/react';
import gsap from "gsap";
import Swal from "sweetalert2";
import gmail from '../Gmail_Logo_128px.png';
import phone from '../phone.png';

function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

    const [formState, handleSubmit] = useForm("xzbllkdd");
  
    // if (formState.succeeded) {
    //         Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: "Thank you for contacting us!",
    //                     showConfirmButton: false,
    //                     timer: 2500,
    //                   }
    //             );
    //             setState({
    //               name: "",
    //               email: "",
    //               message: "",
    //             });      
    // }


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

useEffect(() => {
  if (formState.succeeded) {
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you for contacting us!",
          showConfirmButton: false,
          timer: 2500,
      });
      setState({
          name: "",
          email: "",
          message: "",
      });
  }
}, [formState.succeeded]);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setState({
      ...state,
      [name]: value,
  });
};
    
  

  return (
      <Container className="wave-wraper">
            <hr></hr>
            <h1 className="header">Contact Us</h1>
            <hr></hr>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <div>
                <p className="contact-text mt-5">{contactConfig.description}</p>
                </div>
          
            <div className="social">
                <address>
                <a className="mail" href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              <img src={gmail} alt="gmail" width="64px"/>
              </a>
                <a className="mail" href={`tel:${contactConfig.YOUR_FONE}`}>
              <img src={phone} alt="fone" width="55px"/>
              </a>
            </address>
            </div>
            
            
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form 
            onSubmit={handleSubmit} 
            id="contact-form" 
            className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group mb-2">
                  <input 
                    required={true}
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    value={state.name}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    required={true}
                    className="form-control mb-2"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={state.email}
                    onChange={handleInputChange} 
                  />
                  <ValidationError 
        prefix="Email" 
        field="email"
        errors={formState.errors}
      />
                </Col>
              </Row>
              <textarea
                required={true}
                className="form-control"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={state.message}
                onChange={handleInputChange} 
              ></textarea>
              <ValidationError 
        prefix="Message" 
        field="message"
        errors={formState.errors}
      />
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="about-btn" 
                  type="submit" 
                  disabled={formState.submitting}> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
 
      </Container>
  );
}

export default Contact;




