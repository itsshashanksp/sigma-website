const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-content">

          {/* Main statement */}
          <div className="hero-main">

            <span className="hero-badge">
              30+ Years of Technology Experience
            </span>

            <h1>
              Technology solutions
              <br />
              that keep your
              <br />
              business running.
            </h1>

          </div>

          {/* Supporting statement */}
          <div className="hero-description">

            <p>
              Sigma Software Solutions provides business software,
              POS technology, IT hardware, and the support needed
              to keep everyday operations reliable.
            </p>

          </div>

        </div>

        {/* Sigma visual card */}
        <div className="hero-visual">

          <div className="hero-visual-inner">

            <div className="hero-visual-small">
              SIGMA
            </div>

            <div className="hero-visual-content">

              <h2>
                Built for
                <br />
                real business.
              </h2>

              <div className="hero-services">
                <span>SOFTWARE</span>
                <span>HARDWARE</span>
                <span>SUPPORT</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;