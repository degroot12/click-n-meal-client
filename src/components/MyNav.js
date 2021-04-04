import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


function MyNav(props) {
  const {onLogout, user} = props;

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="https://res.cloudinary.com/snowbird/image/upload/v1613474992/Click-n-meal/logo_excl_txt_uburr9.png"
            // src="https://res.cloudinary.com/snowbird/image/upload/v1613474990/Click-n-meal/logo_hcfaea.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>  
          <Nav.Link href="/profile">My Recipes</Nav.Link>
          <Nav.Link href="/create-recipe">Create</Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">       
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">             
              {
                user ? 
                (<>
                  <NavDropdown.Item href="/about">About</NavDropdown.Item>
                  <NavDropdown.Divider /> 
                  <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
                </>
                 ) 
                : 
                (<>                 
                  <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>  
                  <NavDropdown.Item href="/about">About</NavDropdown.Item>
                  <NavDropdown.Divider /> 
                  <NavDropdown.Item href="/signin">Signin</NavDropdown.Item>
                </>)
              }
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>




      //   <Navbar  bg="light"  expand="lg">
      //     <Navbar.Toggle  aria-controls="basic-navbar-nav"  />
      //     <Navbar.Collapse  id="basic-navbar-nav">
      //       <Dropdown>
              
      //       </Dropdown>
      //       <Nav  className="mr-auto">
      //         <Link  to="/">Selector</Link>
      //         <Link to="/signin">Signin</Link>
      //         <Link to="/signup">Signup</Link>
      //         <Link to="/about">About</Link>
      //       </Nav>
      //     </Navbar.Collapse>
      // </Navbar>
    )
}

export default MyNav