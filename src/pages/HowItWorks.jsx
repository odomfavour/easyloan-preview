import PageWrapper from '../layouts/page_wrapper/PageWrapper'
import React from 'react'
import { Container, Row, Image, Col } from 'react-bootstrap'
import { Buttons } from '../components'

import howToUse from "../assets/howToUse.png"
import Content from '../components/content/Content'

import HIWSession5 from '../assets/HIWSession5.svg'
import HIWSession1 from '../assets/HIWSession1.svg'
import HIWSession2 from '../assets/HIWSession2.svg'
import HIWSession3 from '../assets/HIWSession3.svg'
import HIWSession4 from '../assets/HIWSession4.svg'

const HowItWorks = () => {
  return (
    <PageWrapper>
        <Container className='px-4 px-md-0'>
            <div className='pt-5'>
                <h1 className="heading-font" style={{ fontSize: "3rem" }}>
                    How It Works
                </h1>
                <hr className='btn-purple' style={{'height': '1px', 'width':'15%',}} />
            </div>
            <div>
                <Image src={howToUse} alt='how to use' className='  pt-3 w-100'/>
            </div>
            <Row className='py-5 w-100 w-md-50 justify-content-center'>
                <Col md={8} className='d-flex flex-column justify-content-center align-items-center'>
                    <h1  className="heading-font  text-center" style={{ fontSize: "3rem" }}>
                        Get your products to your store in 5 easy steps
                    </h1>
                </Col>
            </Row>
            <Content
                title='Register'
                sub='Register  with Eazyloan by filling in your details to get started. Your personal and business details are safe. Refer to our privacy policy for more information.'
                imgs={HIWSession1}
                contStart='left'
                btnStyle='w-25'
                btnOne= {[true, 'Register']}
                btnTwo= {[true, 'Log in']}
            />
            <Content
                title='Fill the Application Form'
                sub='After registering and successfully verifying your details, apply for a loan  by providing details on the product type, category, LPOs, manufacturers detaills and other details. '
                imgs={HIWSession2}
                contStart='right'
                btnStyle='w-25'
                btnOne= {[true, 'Go to form']}
                btnTwo= {[false, null]}
            />
            <Content
                title='Upload Documents'
                sub='Next, upload all necessary business documents and then submit your application for approval. Approval takes 24 to 72 business hours.'
                imgs={HIWSession3}
                contStart='left'
                btnStyle='w-25'
                btnOne= {[false, null]}
                btnTwo= {[false, null]}
            />
            <Content
                title='Get Offers'
                sub='After your loan has been reviewed and approved, you will be notified and given offers from our various financial partners.  You can choose the offer that suits you and accept it.'
                imgs={HIWSession4}
                contStart='right'
                btnStyle='w-25'
                btnOne= {[false, null]}
                btnTwo= {[false, null]}
            />
            <Content
                title='Get Products'
                sub='Your products will  be delivered to you.'
                imgs={HIWSession5}
                contStart='left'
                btnStyle='w-25'
                btnOne= {[false, null]}
                btnTwo= {[false, null]}
            />
            <div className='mt-3 mb-5 d-flex justify-content-center'>
             <Buttons variant="purple" className="w-50">
                 Apply For Loan
             </Buttons>
            </div>
        </Container>
    </PageWrapper>
  )
}

export default HowItWorks