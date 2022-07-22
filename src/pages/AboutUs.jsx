import PageWrapper from '../layouts/page_wrapper/PageWrapper'
import React from 'react'
import { Container, Row, Image, Col } from 'react-bootstrap'
import { Buttons } from '../components'

import AboutImg from "../assets/aboutImg.png"
import Content from '../components/content/Content'

import Job_offers_amico_1 from '../assets/Job_offers-amico_1.svg'
import Rocket_amico_1 from '../assets/Rocket_amico_1.svg'
import team_member_1 from '../assets/team_member_1.png'
import team_member_2 from '../assets/team_member_2.png'
import team_member_3 from '../assets/team_member_3.png'
import team_member_4 from '../assets/team_member_4.png'
import team_member_5 from '../assets/team_member_5.png'
import team_member_6 from '../assets/team_member_6.png'
import Frame_212 from '../assets/Frame_212.svg'
import CardComponent from '../components/card/CardComponent'




const AboutUs = () => {
  return (
    <PageWrapper>
        <Container className='px-4 px-md-0'>
            <div className='pt-5'>
                <h1 className="heading-font" style={{ fontSize: "3rem" }}>
                   About Us
                </h1>
                <hr className='btn-purple' style={{'height': '1px', 'width':'15%',}} />
            </div>
            <div>
                <Image src={AboutImg} alt='how to use' className='  pt-3 w-100'/>
            </div>
            <Row className='py-5 w-100 flex-column w-md-50 align-items-center justify-content-center'>
              
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <h1  className="heading-font  text-center" style={{ fontSize: "3rem" }}>
                      Why Choose Us
                    </h1>
                </Col>
                <Col sm={12} md={8} className='d-flex py-2 text-center flex-column justify-content-center align-items-center'>
                    <p>
                    EasyLoan is a simple, technologically developed lending platforn that provide micro loans for short-terms duration in-order to meet and cover unexpected emergencies and urgent cash needs for our customers. We aim to be the No 1 financial institution in Africa.
                    </p>
                </Col>
                <Col className='d-flex  text-center flex-column justify-content-center align-items-center'>
                  <Buttons variant="purple" className="w-50">
                    Get Loan Now     
                  </Buttons>
                </Col>
            </Row>
            <Content
                title='Our Mission and Core Values'
                sub='Everyday we strive to understand our customers by leveraging technology, data and innovation to deliver top-notch financial services to the mobile generation.

                The market across the globe is rising, hence there is need for reliable financial services and capital that is fair. Due to this uprising growth, EasyLoan has a unique opportunity to build customer-first financial products for the masses.'
                imgs={Rocket_amico_1}
                contStart='left'
                btnStyle='w-50'
                btnOne= {[false, null]}
                btnTwo= {[false, null]}
            />
             <Row className='py-5 w-100 flex-column w-md-50 align-items-center justify-content-center'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <h1  className="heading-font  text-center" style={{ fontSize: "3rem" }}>
                      Meet the Team
                    </h1>
                </Col>
            </Row>
             
            <Container>
              <Row xs={1} md={3} className="g-5 justify-content-center">
                <CardComponent imgi={team_member_1} charName='Ajayi Badmus' position='Managing Director'/>
                <CardComponent imgi={team_member_2} charName='Savannah Nguyen' position='Finance Manager'/>
                <CardComponent imgi={team_member_3} charName='Ronald Richards' position='Chief Finance Manager'/>
                <CardComponent imgi={team_member_4} charName='Chinedu  Ogueri' position='Managing Director'/>
                <CardComponent imgi={team_member_5} charName='Ajayi Badmus' position='Social Media Manager'/>
                <CardComponent imgi={team_member_6} charName='Ajayi Badmus' position='Loan Manager'/>
              </Row>
            </Container>
            <Row className='py-5 mt-5 bg-light w-100 w-md-50 align-items-center justify-content-center'>
              <Col sm={12} md={6} lg={4} className='d-flex flex-column my-3 my-lg-0 justify-content-center align-items-center'>
                  <h1  className="heading-font  text-center" style={{ fontSize: "3rem" }}>
                    98%
                  </h1>
                  <p>Products loaned across Nigeria</p>
              </Col>
              <Col sm={12} md={6} lg={4} className='d-flex flex-column my-3 my-lg-0  justify-content-center align-items-center'>
                  <h1  className="heading-font  text-center" style={{ fontSize: "3rem" }}>
                     120K +
                  </h1>
                  <p>Customer satisfaction rate</p>
              </Col>
              <Col sm={12} md={6} lg={4} className='d-flex flex-column my-3 my-lg-0  justify-content-center align-items-center'>
                  <div className='d-flex justify-content-center align-items-center'>
                  <h1  className="heading-font  text-center mb-0 me-2" style={{ fontSize: "3rem" }}>
                    98%
                  </h1>
                    <Image src={Frame_212} alt='rating'/>
                  </div>
                  <p>Customer satisfaction rate</p>
              </Col>
              
            </Row>
            <Content
                title='Join Us'
                sub='We are dedicated to helping our employees get to their desired career heights via a properly planned and inclusive system. Join our team of experienced individuls today.'
                imgs={Job_offers_amico_1}
                contStart='right'
                btnStyle='w-50'
                btnOne= {[false, null]}
                btnTwo= {[true, 'View Available Jobs']}
            />
        </Container>
    </PageWrapper>
  )
}

export default AboutUs