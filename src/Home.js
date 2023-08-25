import React from 'react';

import './App.css';
import { Typewriter } from 'react-simple-typewriter'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';








function Home() {
  const MyComponent = () => {

    const handleType = (count:number) => {
      // access word count number
      console.log(count)}
    }
  
    const handleDone = () => {
      console.log(`Done after 5 loops!`)
    }
  

  return (
    <>

     <section className='sec1 d-flex'>
      <Container >
        <Row>
        
          
          <Col xl={7} lg={6} md={4} sm={12} xs={12} className='div2'>
           
          <div className='App'>
         
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
      <h3>Hi</h3>
          <h3 >I'M <span className='span1'> Youssef Emad</span></h3>
         <span className='span1'>I'M A </span> {' '}
        <span style={{ color: 'white', fontWeight: 'bold', fontSize:'45px' , marginLeft:'-30px'} }>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Front end developer', 'Freelancer' , 'Software Engineer']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
          />
        </span>
      </h1>
          </div>
          <div>
            <a href='https://www.facebook.com/youssef.emad.33'  target='blank'>
            <FontAwesomeIcon icon={faFacebook}  className='icon1' />

            </a>
            <a href='https://www.linkedin.com/in/youssef-emad-2a69a5266'  target='blank'>
            <FontAwesomeIcon icon={faLinkedin} className='icon1' />

            </a>
            <a href='https://github.com/youssefemad7'  target='blank'>
            <FontAwesomeIcon icon={faGithub} className='icon1'/>
            

            </a>
       
            </div>
            <Link to="/About">       
              <button class="btn-13"><span className='spanhome'>More About Me</span></button>
            </Link>



           </Col>
           <Col xl={5} lg={6} md={8} sm={12} xs={12} className="div1 " style={{width:'450px'}}>
            <div>
            <img src="/images/1a8317f5-b9dc-4041-b2d6-3f30c51cf4d4.jpg" alt=""  className='img1'  />

            </div>

          </Col>
          

        </Row>
        
      </Container>
       
    </section>
    </>
    
   
   
  );
}

export default Home;