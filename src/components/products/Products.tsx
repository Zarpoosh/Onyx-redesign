import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';

const Products: React.FC = () => {
  const products = [
    {
      img: 'https://onyxcompany.ir/assets/NN22-D46a2zYr.jpeg',
      title: 'Industrial Refractory',
      description: 'High-temperature resistant materials ideal for industrial furnaces and kilns.',
      link: '#article1'
    },
    {
      img: 'https://onyxcompany.ir/assets/micronize-BAd9P8pn.jpeg',
      title: 'Micronized Kaolin',
      description: 'Finely processed kaolin powder used in ceramics and coatings.',
      link: '#article2'
    },
    {
      img: 'https://onyxcompany.ir/assets/nodel-C5FKqEUw.jpeg',
      title: 'Nodel Kaolin',
      description: 'A high-purity kaolin type providing smooth texture and brightness.',
      link: '#article3'
    },
    {
      img: 'https://onyxcompany.ir/assets/podrdaneh-JQOkxBm2.jpeg',
      title: 'Powder Kaolin',
      description: 'Powder form kaolin suitable for chemical and paper industries.',
      link: '#article4'
    },
  ];

  return (
    <section id="products" className="products-section py-5">
      <Container>
        <h2 className="text-center fw-bold  mb-4">Our Products</h2>
        {/* <p>Onyx Industrial and Mining Group.</p> */}
        <Row className="g-4">
          {products.map((product, index) => (
            <Col key={index} lg={3} sm={6}>
              <Card className="h-100 shadow-sm product-card ">
                <Card.Img
                  variant="top"
                  src={product.img}
                  alt={product.title}
                  className="product-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                  <Button
                    variant="warning"
                    href={product.link}
                    className="mt-auto btn-custom"
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
