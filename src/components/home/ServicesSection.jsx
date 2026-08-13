const services = [
  {
    title: "Custom Software Development",
    description:
      "We design and develop custom software solutions tailored to streamline business operations and improve productivity.",
    tags: ["SOFTWARE", "BUSINESS APPLICATIONS"],
  },
  {
    title: "Website Development",
    description:
      "We build modern, responsive and SEO-friendly business websites that strengthen your online presence and support business growth.",
    tags: ["WEB DEVELOPMENT", "RESPONSIVE", "SEO"],
  },
  {
    title: "Technology Consulting & Support",
    description:
      "We provide technology consulting, implementation and ongoing support to help businesses operate efficiently and confidently.",
    tags: ["CONSULTING", "IMPLEMENTATION", "SUPPORT"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services section">
      <div className="container">

        {/* SERVICES HEADER */}
        <div className="services-header">

          <span className="services-tag">
            What We Do
          </span>

          <h2 className="services-heading">
            Technology Services Built Around Your Business
          </h2>

          <p className="services-description">
            We provide practical technology services that help businesses
            build, improve and maintain reliable digital systems.
          </p>

        </div>


        {/* SERVICES CARDS */}
        <div className="services-grid">

          {services.map((service, index) => (
            <article
              className="service-card"
              key={index}
            >

              <div className="service-card-content">

                <h3 className="service-card-title">
                  {service.title}
                </h3>

                <p className="service-card-description">
                  {service.description}
                </p>

              </div>


              <div className="service-card-footer">

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;