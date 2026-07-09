import { NavLink  } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="contact" className="cta section">
      <div className="container">

        <div className="cta-box">

          <h2>
            Ready to Transform Your Business?
          </h2>

          <p>
            Partner with Sigma Consultants for innovative software,
            enterprise technology, hardware solutions, and business automation.
          </p>

          <NavLink  to="/enquiry" className="primary-btn">
            Enquiry
          </NavLink >
        </div>

      </div>
    </section>
  );
};

export default CTASection;
