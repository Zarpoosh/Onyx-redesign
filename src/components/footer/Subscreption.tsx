import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "./subscreption.css";

const SubscriptionSection: React.FC = () => {
  return (
    <section className="subscription-section">
      <Container>
        <h1 className='fw-bold'>با آخرین اطلاعات صنعتی ما به‌روز بمانید</h1>
        <p>برای دریافت آخرین اخبار، تحقیقات و نوآوری‌ها از گروه صنعتی اونیکس مشترک شوید.</p>

        <Form className="subscription-form">
          <Form.Control
            type="email"
            placeholder="آدرس ایمیل خود را وارد کنید"
          />
          <Button type="button" className='btn-custom text-light'>اشتراک</Button>
        </Form>

        <p className="subscription-note">
          با اشتراک، شما با شرایط و سیاست حفظ حریم خصوصی ما موافقت می‌کنید.
        </p>
      </Container>
    </section>
  );
};

export default SubscriptionSection;
