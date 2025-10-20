import React from "react";
import "./Projects.css";
import { Container, Row, Col,Card, Button } from "react-bootstrap";

const Projects: React.FC = () => {
  const industries = [
    {
      title: "کارخانه سیمان",
      text: "تأمین مواد خام باکیفیت برای تولید سیمان همراه با همکاری‌های صنعتی بلندمدت.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPn9uUYedje3eRLvYMHCaXMZlXVHJVgFYbYsc9fcnrHK5dAAGyGmTno-UXYvMha3mIFY&usqp=CAU",
    },
    {
      title: "ظروف چینی",
      text: "تأمین مواد تصفیه‌شده برای صنایع چینی و ظروف غذاخوری با استانداردهای کیفیت برتر.",
      img: "https://images.pexels.com/photos/705190/coffee-cups-stacked-white-705190.jpeg",
    },
    {
      title: "محصولات سرامیکی",
      text: "ارائه مواد پیشرفته سرامیکی برای کاربردهای دکوری و صنعتی.",
      img: "https://biplans.ir/wp-content/uploads/2025/04/1-ceramic.webp",
    },
    {
      title: "لوازم بهداشتی",
      text: "تأمین‌کننده مورد اعتماد مواد خام با دوام برای لوازم بهداشتی و تجهیزات حمام.",
      img: "https://luxchini.com/wp-content/uploads/2024/11/%DA%A9%D8%A7%D8%B1%D8%AE%D8%A7%D9%86%D9%87-%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%D8%AA%D9%88%D8%A7%D9%84%D8%AA-%D9%81%D8%B1%D9%86%DA%AF%DB%8C.jpg",
    }
    
  ];
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
      <h2 className="text-center fw-bold mb-5"> صنایع هدف و بازارها</h2>
      <p className="text-end p-4">
              گروه صنعتی اونیکس با تکیه بر زیرساخت‌های فنی و نیروی انسانی متخصص، گامی مؤثر در
              توسعه معدن و صنعت کشور برداشته و به عنوان تأمین‌کننده مواد اولیه برای صنایع زیر
              فعالیت میکند
            </p>
            <ul className="text-end list-unstyled p-4">
              <li> کاشی و سرامیک</li>
              <li> چینی بهداشتی</li>
              <li> آجرهای نسوز</li>
              <li> رنگ‌سازی</li>
              <li> کاغذسازی</li>
              <li> صنایع آرایشی و بهداشتی</li>
            </ul>
{industries.map((item, index) => (
  <Row key={index} className="mb-5">
    <Col
      lg={6}
      className={`mb-4 mb-lg-0 ${index % 2 === 1 ? "order-lg-2" : ""}`}
    >
      <Card className="shadow h-100 industry-card">
        <Card.Img
          variant="top"
          src={item.img}
          alt={item.title}
          className="industry-img"
        />
        <Card.Body className="d-flex flex-column text-end">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text className="flex-grow-1">{item.text}</Card.Text>
          <Button variant="warning" href="#" className="mt-auto btn-custom">
            بیشتر
          </Button>
        </Card.Body>
      </Card>
    </Col>
    <Col lg={6} className="d-none d-lg-block"></Col>
  </Row>
))}




        <h2 className="fw-bold">پروژه ها</h2>
        <p>آماده سازی پروژه نسوز صنعتی اونیکس</p>
        <Row className="g-3">
  <Col md={4}>
    <img
      src="https://onyxcompany.ir/assets/p1-BeNN-TCa.jpeg"
      alt="Project 1"
      className="img-fluid"
    />
  </Col>
  <Col md={4}>
    <img
      src="https://onyxcompany.ir/assets/p2-DE_dMmW1.jpeg"
      alt="Project 2"
      className="img-fluid"
    />
  </Col>
  <Col md={4}>
    <img
      src="https://onyxcompany.ir/assets/p3-DrP3I4_f.jpeg"
      alt="Project 3"
      className="img-fluid"
    />
  </Col>
</Row>

      </Container>
    </section>
  );
};

export default Projects;
