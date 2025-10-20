import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";

interface Product {
  img: string;
  title: string;
  description: string;
  link: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      img: "https://onyxcompany.ir/assets/NN22-D46a2zYr.jpeg",
      title: "نسوز صنعتی",
      description:
        "مواد مقاوم در برابر دماهای بالا، مناسب برای کوره‌ها و فرهای صنعتی.",
      link: "#article1",
    },
    {
      img: "https://onyxcompany.ir/assets/micronize-BAd9P8pn.jpeg",
      title: "کائولین میکرونیزه",
      description:
        "پودر کائولین فرآوری شده با دانه‌بندی بسیار ریز، استفاده شده در سرامیک و پوشش‌ها.",
      link: "#article2",
    },
    {
      img: "https://onyxcompany.ir/assets/nodel-C5FKqEUw.jpeg",
      title: "کائولین نودل",
      description:
        "نوعی کائولین با خلوص بالا که بافت نرم و درخشندگی عالی دارد.",
      link: "#article3",
    },
    {
      img: "https://onyxcompany.ir/assets/podrdaneh-JQOkxBm2.jpeg",
      title: "کائولین پودری",
      description:
        "کائولین به صورت پودر که برای صنایع شیمیایی و کاغذ مناسب است.",
      link: "#article4",
    },
  ];

  // State برای لایک و ذخیره
  const [liked, setLiked] = useState<boolean[]>(
    Array(products.length).fill(false)
  );
  const [saved, setSaved] = useState<boolean[]>(
    Array(products.length).fill(false)
  );

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
      <Container className="text-end">
        <h2 className="text-center fw-bold mb-4">محصولات ما </h2>
        <ul className="list-unstyled text-end pr-6">
          <li>فرآوری کائولن</li>
          <li>تولید فرآورده‌های نسوز سنگین و سبک صنعتی</li>
          <li>تولید آجرهای ساختمانی و نما</li>
          <li>تولید چینی‌آلات بهداشتی</li>
          <li>تولید آجر سفال ساختمانی</li>
          <li>احداث کارگاه‌ کوره‌سازی (کوره تونلی و شاتل)</li>
          <li>طراحی و ساخت دستگاه‌ها و تجهیزات صنعتی مرتبط</li>
        </ul>

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
                  <Card.Text className="flex-grow-1">
                    {product.description}
                  </Card.Text>

                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <Button
                      variant="warning"
                      href={product.link}
                      className="btn-custom flex-grow-1 me-2"
                    >
                      بیشتر بدانید
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
