import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const About = () => {
  return (
    <>

   <section className='sec1about '>
   <h1 className=' d-flex justify-content-center mb-5'>ABOUT <span className='spanabout' style={{ color:'#3b71ca'}}> ME</span> </h1>

    <Container >
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} >
        <h4 className='mb-5'>PERSONAL INFOS</h4>
        <div className='d-flex div1about'>
        <div className=''> 
          <h6>Address : <span> Egypt</span> </h6>
          <h6>Phone : <span>+20 101 562 9073</span> </h6>
          <h6>Langages :<span>Arabic , English</span> </h6>
        
          <h6> Email :<span>youssefabdelnaby12123@gmail.com</span>  </h6>
        </div>
        <div className='div3about'>
          <h6>First Name :<span> Youssef</span></h6>
          <h6>Last Name :<span>Emad</span> </h6>
          <h6>Age :<span>20 Years</span> </h6>
          <h6>Freelance : <span>Available</span></h6>
        </div>
        </div>
        <Link to="/About">       
              <button class="btn-13"><span>Download CV</span></button>
            </Link>
       
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div>
          <div class="row sec12about ">
          <div class="col-6 div2about col-xs-6 col-sm-6">
                <div class="box-stats with-margin">
                  <h3 class="poppins-font position-relative">1</h3>
                  <p class="open-sans-font m-0 position-relative text-uppercase">
                    years of <span class="d-block">experience</span>
                  </p>
                </div>
              </div>
              <div class="col-6 div2about col-xs-6 col-sm-6">
                <div class="box-stats with-margin">
                  <h3 class="poppins-font position-relative">30</h3>
                  <p class="open-sans-font m-0 position-relative text-uppercase">
                    completed <span class="d-block">projects</span>
                  </p>
                </div>
              </div>
              <div class="col-6 div2about col-xs-6 col-sm-6">
                <div class="box-stats">
                  <h3 class="poppins-font position-relative">5</h3>
                  <p class="open-sans-font m-0 position-relative text-uppercase">
                    Happy<span class="d-block">customers</span>
                  </p>
                </div>
              </div>
              <div class="col-6 div2about col-xs-6 col-sm-6">
                <div class="box-stats">
                  <h3 class="poppins-font position-relative">10</h3>
                  <p class="open-sans-font m-0 position-relative text-uppercase">
                    awards <span class="d-block">won</span>
                  </p>
                </div>
              </div>
            </div>
         
          </div>
             
        </Col>
      </Row>
    </Container>

   </section>
   <hr  className=' brabout bg-light'  style={{width:'550px' } } />
   <section className='sec2about'>

   <h2>
        My Skills
      </h2>
    <Container>
      
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
        <div>
          
          <img src='/images/html_jk9tLsW.png'  />
          <img src='/images/css_AwJpyw3.png' />
          <img src='/images/js.png' />

        </div>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12}>
        <div>
        <img src='/images/bootstrap_FKBDswT.png' />
          <img src='/images/tailwindcss.png'  style={{width:'150px' , height:'150px'} } />
          <img src='/images/react.png' />
        </div>
        </Col>
      </Row>
    </Container>
   </section>
    </>
  )
}

export default About;