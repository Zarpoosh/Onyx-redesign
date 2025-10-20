import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css';
import { FaMoon, FaSun } from 'react-icons/fa';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavbarComponent: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const expand = 'lg';

  return (
    <Navbar 
      expand={expand} 
      fixed="top"
      className={`sticky-top shadow-sm ${darkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}
    >
      <Container fluid>
        <Navbar.Brand href="#">Onyx</Navbar.Brand>

      
        <div className="d-flex align-items-center ms-auto">
          <Button
            variant={darkMode ? 'light' : 'dark'}
            onClick={toggleDarkMode}
            className="me-2"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>

        </div>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          placement="end"
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>منو</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home"> صفحه اصلی</Nav.Link>
              <Nav.Link href="#about">درباره ما</Nav.Link>
              <Nav.Link href="#projects">پروژه ها</Nav.Link>
              <Nav.Link href="#services">خدمات</Nav.Link>
              <Nav.Link href="#products">محصولات</Nav.Link>
            </Nav>

            <Form className="d-flex mt-3 mt-lg-0">
              <Form.Control
                type="search"
                placeholder="جستوجو"
                className="me-2 search-input border-2"
              />
              <Button className="btn-custom search-btn">جستوجو</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
