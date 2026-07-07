const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container about-container">

        <div className="about-content">

          <span className="section-tag">
            About Sigma
          </span>

          <h2>
            Over 30+ Years of Delivering Technology Solutions
          </h2>

          <p>
            Sigma Consultants is a trusted technology partner specializing in
            software development, IT consulting, enterprise solutions,
            computer peripherals, barcode systems, and innovative web
            products.
          </p>

          <p>
            For more than two decades, we have helped businesses improve
            efficiency through reliable technology, quality products,
            and customer-focused solutions.
          </p>

          <button className="primary-btn">
            Learn More
          </button>

        </div>

        <div className="about-image">
          <img
            src="/images/about/about-company.png"
            alt="Sigma Consultants"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
