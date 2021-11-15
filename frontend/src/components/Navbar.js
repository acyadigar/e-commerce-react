import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";

export default function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link>
                <Link to="/" className="router-link">
                  Anasayfa
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/products" className="router-link">
                  Ürünler
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link to="/sign-in" className="router-link">
                  Giriş Yap
                  <PersonCircle className="mb-1 mx-2" />
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/sign-up" className="router-link">
                  Kayıt Ol
                  <PersonCircle className="mb-1 mx-2" />
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
