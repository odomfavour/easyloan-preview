import React from 'react'
import { useState } from 'react';
import { 
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit'
import Buttons from '../Buttons';
import * as AiIcons from 'react-icons/ai'


const EasyloanModal = () => {
    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = (e) => {
      e.preventDefault()
      setCentredModal(!centredModal)
    }

    return (
      <>
        <Buttons
							style="purple"
							size="md"
							className="w-100 mb-3"
							onClick={toggleShow}
							type="submit">
							Calculate
					</Buttons>

        <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
          <MDBModalDialog centered className='d-flex flex-column justify-content-center'>
          <MDBModalContent className='bg-transparent d-flex border-0 align-items-end mb-4' >
            <MDBBtn className=' btn-close bg-light border-0 fs-5 rounded-circle p-2 fw-bold text-secondary' style={{'marginRight': '-28px'}} color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalContent>
            
            <MDBModalContent style={{'borderRadius':'20px'}} className='border-0'>
              <MDBModalHeader className='justify-content-center border-bottom-0'>
                <MDBModalTitle>Loan Offer</MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody className='d-flex justify-content-between'>
                <div className='d-flex '>
                  <ul className='list-group'>
                    <li className='list-group-item border-0 py-3'>Product Price</li>
                    <li className='list-group-item border-0 py-3'>Interest</li>
                    <li className='list-group-item border-0 py-3'>Down Payment</li>
                    <li className='list-group-item border-0 py-3'>Repayment Option</li>
                    <li className='list-group-item border-0 py-3'>Loan Tenure</li>
                    <li className='list-group-item border-0 py-3'>Total Loan Amount</li>
                    <li className='list-group-item border-0 py-3'>Repayment Amount</li>
                  </ul>
                </div>
                <div style={{'height': 'auto', 'width':'1px', 'backgroundColor': '#DEE2E6'}}></div>
                <div>
                  <ul className='list-group'>
                    <li className='list-group-item border-0 py-3'>N1,000, 000</li>
                    <li className='list-group-item border-0 py-3'>21%</li>
                    <li className='list-group-item border-0 py-3'>N31,000</li>
                    <li className='list-group-item border-0 py-3'>Monthly</li>
                    <li className='list-group-item border-0 py-3'>5 Months</li>
                    <li className='list-group-item border-0 py-3'>N1,234,500</li>
                    <li className='list-group-item border-0 py-3'>N61,000</li>
                  </ul>
                </div>
              </MDBModalBody>
              <div className='p-4'>
                <MDBModalFooter className='justify-content-center'>
                  <p>Additional changes have not been included in this offer</p>
                </MDBModalFooter>
              </div>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
}

export default EasyloanModal