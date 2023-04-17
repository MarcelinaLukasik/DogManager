import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import "../../styles/main/layout.css";

const Layout: React.FC = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => scrollNavbar(), []);

  const scrollNavbar = () => {
    const onScroll = () => {
      if (window.scrollY > 55) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  };

  const onUpdateActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <div>
                <Nav.Link
                  as={Link}
                  to="/"
                  className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("home")}
                >
                  DogManager
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/"
                  className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/manager"
                  className={
                    activeLink === "manager"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("manager")}
                >
                  Manager
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/tips"
                  className={
                    activeLink === "tips" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("tips")}
                >
                  Tips
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
                  className={
                    activeLink === "about"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("about")}
                >
                  About
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
