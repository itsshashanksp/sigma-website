const features = [
  {
    title: "Business Understanding",
    description:
      "We focus on understanding how a business operates so technology can be practical, relevant and useful.",
    tags: ["BUSINESS", "PRACTICAL"],
  },
  {
    title: "Proven Experience",
    description:
      "More than three decades of experience working with businesses and their technology requirements.",
    tags: ["30+ YEARS", "EXPERIENCE"],
  },
  {
    title: "Software & Hardware",
    description:
      "We bring software, POS systems, computing and technology hardware together to support complete business requirements.",
    tags: ["SOFTWARE", "HARDWARE", "POS"],
  },
  {
    title: "Long-Term Support",
    description:
      "Our relationship with customers goes beyond implementation, with continued technology support when it is needed.",
    tags: ["SUPPORT", "LONG-TERM"],
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why" className="why section">
      <div className="container">

        {/* HEADER */}
        <div className="why-header">

          <span className="why-tag">
            Why Choose Sigma
          </span>

          <h2 className="why-heading">
            Technology Built on Experience and Practical Understanding
          </h2>

          <p className="why-description">
            We combine decades of business technology experience with a
            practical approach to software, hardware and ongoing support.
          </p>

        </div>


        {/* CARDS */}
        <div className="why-grid">

          {features.map((feature, index) => (
            <article
              className="why-card"
              key={index}
            >

              <div className="why-card-content">

                <h3 className="why-card-title">
                  {feature.title}
                </h3>

                <p className="why-card-description">
                  {feature.description}
                </p>

              </div>


              <div className="why-card-footer">

                <div className="why-tags">
                  {feature.tags.map((tag) => (
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

export default WhyChooseUs;