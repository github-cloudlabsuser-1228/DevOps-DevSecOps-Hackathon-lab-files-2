import React from "react";

const AboutUsPage = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>About Us</h1>
      <p>
        Welcome to Contoso Traders! We are committed to providing the best
        products and services to our customers.
      </p>
      <p>
        Our mission is to deliver exceptional value and quality, ensuring
        customer satisfaction at every step.
      </p>
      <p>
        Contact us at{" "}
        <a href="mailto:support@contosotraders.com">support@contosotraders.com</a>{" "}
        for more information.
      </p>
    </div>
  );
};

export default AboutUsPage;