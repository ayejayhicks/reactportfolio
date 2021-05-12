import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './App.css';

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

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

              {/* //Navigation bar */}
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/">Resume</Link>
                <Link className="nav-link" to="/">Contact</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/" exact render={() => <ContactPage title={this.state.contact.title} />} />
 
          <Footer />

            </Container>
          </Router >
        );
  }
}

export default App;
