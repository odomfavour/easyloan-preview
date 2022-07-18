import React, {useEffect} from "react";
import { Container, Row, Col} from "react-bootstrap";
import facebook_icon from "../assets/facebook_icon.svg";
import twitter_icon from "../assets/twitter_icon.svg";
import linkedin from "../assets/linkedin.svg";
import arrow from "../assets/arrow_circle.svg";
import logos from "../assets/eazylogo.svg";

const Footer = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, []);
  return (
     <div className='footer-bg footer-text-color footer-vertical-padding'>
        <Container >
            <Row>
                <Col md={3} xs={12}>
                    <img src={logos} alt="logo" className="pb-3"/>
                    <div className='eazy-footer'>
                        <div>22, Gratitude Street, Lagos</div>
                        <div>info@eazyloan.com</div>
                        <div>0817 777 7777</div>
                    </div>
                    <div className='vertical-padding-icon'>
                        <img className='footer-icon-size' src={facebook_icon} alt="facebook_icon" />
                        <img className='footer-icon-size footer-icon-margin' src={twitter_icon} alt="twitter_icon" />
                        <img className='footer-icon-size' src={linkedin} alt="linkedin_icon" />
                    </div>
                </Col>
                <Col md={2} xs={6} >
                    <div className='eazy-footer footer-top-margin'>
                        <p className='footer-bottom-padding fw-bold'>Get to know us</p>
                        <p >Careers</p>
                        <p >Blog</p>
                        <p >About Us</p>
                        <p >Financial Partners</p>
                    </div>
                </Col>
                <Col md={2} xs={6}>
                    <div className='eazy-footer'>
                        <p className='footer-bottom-padding fw-bold footer-top-margin'>Legal</p>
                        <p >Terms of Service</p>
                        <p >Privacy Policy</p>
                        <p >Contact Agreement</p>
                    </div>
                </Col>
                <Col md={2} xs={6}>
                    <div className='eazy-footer'>
                        <p className='footer-bottom-padding fw-bold footer-top-margin'>Support</p>
                        <p >Your account</p>
                        <p >How it works</p>
                        <p >Your Loans</p>
                        <p >FAQs</p>
                        <p >Contact Us</p>
                    </div>
                </Col>
                <Col md={3} xs={6} >
                    <div className='text-center back_to_top' onClick={()=> {
                        window.scrollTo({top: 0, behavior: 'smooth'})
                        }}>
                        <img className='footer-icon-size2' src={arrow} alt="arrow_img" />
                    </div>
                    <p className='eazy-footer fw-bold text-center back_to_top2'>Back to the top</p>    
                </Col>
            </Row>
            <div className='eazy-footer footer-top-margin'>© 2022 Easyloan</div>
        </Container>
    </div>
  )
}

export default Footer