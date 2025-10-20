import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section py-5 my-5 ">
      <Container>
        <Row className="align-items-center">
          <Col
            md={{ span: 7, order: 2 }}
            xs={{ span: 12, order: 1 }}
            className="text-md-start text-center my-4"
          >
            <h2 className="fw-bold mb-3 text-end">گروه صنعتی و معدنی اونیکس</h2>
            <p className="mb-4 text-end p-3">
              گروه صنعتی و معدنی <strong>اونیکس</strong> با بیش از ۲۵ سال تجربه‌
              موفق در زمینه‌ معادن و صنعت، با توکل به خدا و تکیه بر نیروی کار
              متعهد و دلسوز، امروز در جایگاهی قرار گرفته است که می‌تواند در کنار
              معتبرترین کارخانه‌های کشور حضور مؤثر داشته باشد و محصولات خود را
              با بالاترین کیفیت و آسان‌ترین شیوه‌ی معامله، در اختیار مشتریان
              داخلی و خارجی قرار دهد.
            </p>
            <div className="d-flex justify-content-center mt-3">
              <Button variant="" className="btn-custom" href="#learn-more">
                Learn More
              </Button>
            </div>
          </Col>

          <Col
            md={{ span: 5, order: 1 }}
            xs={{ span: 12, order: 2 }}
            className="text-center mb-4 mb-md-0"
          >
            <img
  src="https://onyxcompany.ir/assets/navaei-DmrPUgXk.jpeg"
  alt="Profile"
  className="img-fluid about-image"
/>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
