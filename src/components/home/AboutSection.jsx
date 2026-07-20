const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container about-container">

        <div className="about-content">

          <span className="section-tag">
            About Sigma
          </span>

          <h2>
            Over 30+ Years of Trusted Technology Excellence
          </h2>

          <p>
            Since our inception, Sigma Software Solutions has been committed 
            to helping businesses embrace technology with confidence. 
            Over the past three decades, we have built long-lasting 
            relationships by delivering reliable software, quality hardware, 
            and exceptional customer support.
          </p>

          <p>
            As the creators of the BINS POS System, we provide complete business 
            technology solutions from software development and POS systems to barcode solutions, 
            enterprise hardware, and after-sales services ensuring our clients have everything they need under one roof.
          </p>

        </div>

        <div className="about-image">
          <img
            src={`${import.meta.env.BASE_URL}images/about/about-company.png`}
            alt="About"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
