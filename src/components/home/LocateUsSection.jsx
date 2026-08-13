import { Navigation } from "lucide-react";

const LocateUsSection = () => {
  return (
    <section id="locateus" className="locate-us section">
      <div className="container">

        {/* HEADER */}
        <div className="locate-header">

          <span className="locate-tag">
            Locate Us
          </span>

          <h2 className="locate-heading">
            Visit Sigma
          </h2>

          <p className="locate-description">
            Our office is located in Basavanagar, Bengaluru. Visit us for
            technology consultations and business discussions.
          </p>

        </div>


        {/* LOCATION */}
        <div className="location-container">

          {/* OFFICE */}
          <div className="office-card">

            <div className="office-card-content">

              <span className="office-label">
                SIGMA SOFTWARE SOLUTIONS
              </span>

              <h3>
                Our Office
              </h3>

              <p>
                No.142, 2nd Floor, 7th Cross, 3rd Main,
                <br />
                Thalacauvery Layout, Basavanagar,
                <br />
                Bengaluru – 560037, Karnataka, India
              </p>

            </div>


            <div className="office-card-footer">

              <span className="office-location">
                BENGALURU, INDIA
              </span>

              <a
                href="https://maps.google.com/?q=12.966567999209289,77.67908726955494"
                target="_blank"
                rel="noreferrer"
                className="location-link"
              >
                <span>Get Directions</span>
                <Navigation size={17} />
              </a>

            </div>

          </div>


          {/* MAP */}
          <div className="map-card">

            <iframe
              title="Sigma Software Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d972.0206428533094!2d77.67908726955494!3d12.966567999209289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU3JzU5LjYiTiA3N8KwNDAnNDcuMCJF!5e0!3m2!1sen!2sin!4v1783421877589!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocateUsSection;