import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Alaina J. Hicks",
      headerLinks: [
        { title: "Home", path: '/' },
        { title: "About", path: '/about' },
        { title: "Resume", path: '/resume' },
        { title: "Contact", path: '/contact' },
      ],
      home: {
        title: "Welcome to my page",
        subTitle: "Checkout my work below"
      },
      about: {
        title: "About Me"
      },
      resume: {
        title: "Resume"
      },
      contact: {
        title: "Let's connect"
      }
    };
  }

      render() {
        return (
          <Router>
            <Container className="p-0" fluid={true}>
              
              <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand>Alaina J. Hicks</Navbar.Brand>

                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                  <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/">About</Link>
                    <Link className="nav-link" to="/">Resume</Link>
                    <Link className="nav-link" to="/">Contact</Link>
                  </Nav>
                  </Navbar.Collapse> 
              </Navbar>


            </Container>
          </Router>
        );
      }
    }

    export default App;
