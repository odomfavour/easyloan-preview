import React, {useEffect} from "react";
import { Container, Row, Col} from "react-bootstrap";
import facebook_icon from "../assets/facebook_icon.svg";
import twitter_icon from "../assets/twitter_icon.svg";
import linkedin from "../assets/linkedin.svg";
import arrow from "../assets/arrow.png";

const Footer = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, []);
  return (
     <div className='footer-bg footer-text-color footer-vertical-padding'>
        <Container >
            <Row>
                <Col >
                    <h5 className='eazy-footer-head footer-bottom-padding text-white footer-font'>EAZYLOAN</h5>
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
                    <div className='eazy-footer'>© 2022 Easyloan</div>
                </Col>
                <Col className='footer-margin'>
                    <div className='eazy-footer'>
                        <p className='footer-bottom-padding'>Get to know us</p>
                        <p >Careers</p>
                        <p >Blog</p>
                        <p >About Us</p>
                        <p >Financial Partners</p>
                    </div>
                </Col>
                <Col >
                    <div className='eazy-footer'>
                        <p className='footer-bottom-padding'>Legal</p>
                        <p >Terms of service</p>
                        <p >Privacy Policy</p>
                        <p >Contact Agreement</p>
                    </div>
                </Col>
                <Col >
                    <div className='eazy-footer'>
                        <p className='footer-bottom-padding'>Support</p>
                        <p >Your account</p>
                        <p >How it works</p>
                        <p >Your Loans</p>
                        <p >FAQs</p>
                        <p >Contact Us</p>
                    </div>
                </Col>
                <Col className='footer-margin'>
                    <div className='footer-cirle2'>
                        <div className='footer-cirle' onClick={()=> {
                            window.scrollTo({top: 0, behavior: 'smooth'})
                        }}>
                            <img src={arrow} alt="arrow_img" />
                        </div>
                    </div>
                    <p className='eazy-footer'>Back to the top</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer