import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section className="homesec6" id="contact">
    <Container className='homesec61'>
      <h3 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">CONTACT <span>ME</span> </h3>
      <Row className="align-items-center">
        <Col md={6} sm={12} className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
          <div className='ms-5'>
            <p><span>Email:</span> youssefabdelnaby12123@gmail.com</p>
            <p><span>Phone:</span> 01015629073</p>
          </div>
          <div>
          <a href='https://www.facebook.com/youssef.emad.33'  target='blank'>
            <FontAwesomeIcon icon={faFacebook}  className='icon1 ms-5' />

            </a>
            <a href='https://www.linkedin.com/in/youssef-emad-2a69a5266'  target='blank'>
            <FontAwesomeIcon icon={faLinkedin} className='icon1 ms-5' />

            </a>
            <a href=' https://github.com/youssefemad7'  target='blank'>
            <FontAwesomeIcon icon={faGithub} className='icon1 ms-5'/>
            

            </a>
       
            </div>
        </Col>
        <Col md={6} sm={12} className="wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="d-flex">
                <input type="text" name="name" placeholder="Name" />
            
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="phone" placeholder="Phone" />
                
              </div>
              <textarea name="message" placeholder="Message" style={{height:'170px'}}></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </Col>

      </Row>
    </Container>
  </section>
  );
};

export default Contact