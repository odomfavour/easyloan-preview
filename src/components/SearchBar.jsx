import React, { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown } from "react-bootstrap-icons";
import {Container,Form, Navbar } from 'react-bootstrap';
import avatar from "../assets/avatar.svg";


const SearchBar = ({ placeholder, data }) => {
  const [pUser, setPUser] = useState({});

    useEffect(() => {
		setPUser(JSON.parse(localStorage.getItem("pUser")));
	}, []);
      return (
    <Navbar className='user-dasboard-bg user-searchbar '  >
      <Container fluid>
        <Navbar.Brand href="#">
        <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 ps-5 shadow-none "
              aria-label="Search"
              style={{width : "500px"}}
            />
            <Search className='search-icon d-flex align-self-center'/>
          </Form>
        </Navbar.Brand>
        <Form className="d-flex">
            <div className='d-none d-sm-block'><Bell /></div>
            <div className="user-img-icon bg-secondary ms-4 me-1 "><img 
            src={pUser.photoURL || avatar} alt="img" className="user-img-icon"/></div>
            <div className='d-none d-sm-block'><ChevronDown /></div>
          </Form>
      </Container>
    </Navbar>

  )
}

export default SearchBar

// const SearchBar = ({ placeholder, data }) => {
//   return (
//     <div className='user-search'>
//         <div className="search-input d-flex mt-3">
//             <input type="text" placeholder={placeholder} className="border-0"/>
//             <div className='search-item d-flex align-self-center'> <Search className='search-icon '/></div>
//         </div>
//         <div className="search-result">
//             {/* {data.map((value, key) => {
//                 return <div> {value.name} </div>
//             })} */}
//         </div>
//     </div>