import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Portfolio = () => {
  return (
    <>
    <section className='secport'>
      <h1>MY <span> PORTFOLIO</span></h1>
    <Container>
      <Row>
        <Col lg={12} md={12}>
        <div class="con">
        <img src='images/Screenshot 2023-03-26 014937.png' className='image' />
          <div class="overlay">
        <div class="text">
      <Link to='https://github.com/youssefemad7/firstone'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </Link>
      <Link to='https://firstone-git-main-youssefemad7.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </Link>


    </div>
  </div>
        </div>
          
        <div class="con">
        <img src='images/Screenshot 2023-03-26 015018.png' />
  <div class="overlay">
    <div class="text">
    <Link to='https://github.com/youssefemad7/watces'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </Link>
      <Link to='https://watces.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </Link>


    </div>
  </div>
        </div> 
        <div class="con">
        <img src='images/Screenshot 2023-03-26 015043.png' />
  <div class="overlay">
    <div class="text">
      <Link to='https://github.com/youssefemad7/port'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </Link>
      <Link to='https://port-git-main-youssefemad7.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </Link>


    </div>
  </div>
        </div>

     
        
        </Col>
        <Col lg={12} md={12}>
        <div class="con">
        <img src='images/Screenshot 2023-03-26 015103.png' />
  <div class="overlay">
    <div class="text">
    <Link to='https://github.com/youssefemad7/kudzoka'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </Link>
      <Link to='https://kudzoka-kappa.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </Link>


    </div>
  </div>
        </div> <div class="con">
        <img src='images/Screenshot 2023-03-26 015120.png' />
  <div class="overlay">
    <div class="text">
      <Link to='https://github.com/youssefemad7/5amsat'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </Link>
      <Link to='https://5amsat-five.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </Link>


    </div>
  </div>
        </div> 
        <div class="con">
        <img src='images/Screenshot 2023-03-26 015137.png' />
     <div class="overlay">
    <div class="text">
      <Link to='https://github.com/youssefemad7/bootstrap/tree/master'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </Link>
      <Link to='https://bootstrap-12123.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </Link>


    </div>
  </div>
        </div>

        
        
        </Col>



        <Col lg={12} md={12}>
          <div>
          <div class="con">
        <img src='images/Screenshot 2023-03-30 031519.png' />
     <div class="overlay">
    <div class="text">
      <Link to='https://github.com/youssefemad7/nextjs/tree/main'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </Link>
      <Link to='https://nextjs-git-main-youssefemad7.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </Link>


    </div>
  </div>
        </div>
          </div>
        </Col>


      </Row>

    </Container>


    </section>
    </>
  )
}

export default Portfolio