import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaGoogle, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
          <Container>
            <Navbar.Brand>Onyx</Navbar.Brand>

            <Nav className="mx-auto text-justify-center">
              <Nav.Link href="#home">صفحه اصلی</Nav.Link>
              <Nav.Link href="#about">درباره ما</Nav.Link>
              <Nav.Link href="#services">خدمات</Nav.Link>
              <Nav.Link href="#products">محصولات</Nav.Link>
              <Nav.Link href="#contact">ارتباط با ما</Nav.Link>
            </Nav>

            <div className="d-flex flex-wrap justify-content-center mt-3  mx-auto mt-lg-0 gap-2">
              <Button variant="btn-custom">
                <FaXTwitter className="text-success" size={20} />
              </Button>
              <Button variant="btn-custom">
                <FaInstagram className="text-success" size={20} />
              </Button>
              <Button variant="btn-custom">
                <FaLinkedin className="text-success" size={20} />
              </Button>
              <Button variant="btn-custom">
                <FaYoutube className="text-success" size={20} />
              </Button>
              <Button variant="">
                <FaGoogle className="text-success" size={20} />
              </Button>
            </div>
          </Container>
        </Navbar>

        <Navbar bg="dark" variant="dark" className="py-2">
          <Container>
            <Navbar.Text className="text-center w-100">
              © 2024 Onyx Industrial Group. All rights reserved.
              <a href="#privacy">Privacy policy</a>
              <a href="#terms">Terms of service</a>
              <a href="#cookies">Cookies settings</a>
            </Navbar.Text>
          </Container>
        </Navbar>
      </Container>
    </footer>
  );
};

export default Footer;
