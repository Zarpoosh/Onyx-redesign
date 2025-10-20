import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';

interface Product {
  img: string;
  title: string;
  description: string;
  link: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
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

  // State برای لایک و ذخیره
  const [liked, setLiked] = useState<boolean[]>(Array(products.length).fill(false));
  const [saved, setSaved] = useState<boolean[]>(Array(products.length).fill(false));

  const toggleLike = (index: number) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const toggleSave = (index: number) => {
    const newSaved = [...saved];
    newSaved[index] = !newSaved[index];
    setSaved(newSaved);
  };

  return (
    <section id="products" className="products-section py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">Our Products</h2>

        <Row className="g-4">
          {products.map((product, index) => (
            <Col key={index} lg={3} sm={6}>
              <Card className="h-100 shadow-sm product-card position-relative">
                <Card.Img
                  variant="top"
                  src={product.img}
                  alt={product.title}
                  className="product-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                  
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <Button
                      variant="warning"
                      href={product.link}
                      className="btn-custom flex-grow-1 me-2"
                    >
                      Read More
                    </Button>

                    {/* دکمه Like */}
                    <Button
                      variant="light"
                      onClick={() => toggleLike(index)}
                      className="icon-btn"
                    >
                      {liked[index] ? (
                        <FaHeart color="red" />
                      ) : (
                        <FaRegHeart color="gray" />
                      )}
                    </Button>

                    {/* دکمه Save */}
                    <Button
                      variant="light"
                      onClick={() => toggleSave(index)}
                      className="icon-btn"
                    >
                      {saved[index] ? (
                        <FaBookmark color="#0f0" />
                      ) : (
                        <FaRegBookmark color="gray" />
                      )}
                    </Button>
                  </div>
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
