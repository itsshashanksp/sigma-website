const industries = [
  {
    title: "Logistics & Courier",
    description:
      "Technology solutions supporting courier operations, logistics workflows and day-to-day business management.",
    tags: ["LOGISTICS", "OPERATIONS"],
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Business technology designed to support retail operations, billing, customer management and growing online businesses.",
    tags: ["RETAIL", "E-COMMERCE"],
  },
  {
    title: "Manufacturing",
    description:
      "Practical technology solutions that help manufacturing businesses manage their operations and technology infrastructure.",
    tags: ["MANUFACTURING", "OPERATIONS"],
  },
  {
    title: "Healthcare",
    description:
      "Reliable technology solutions supporting healthcare organizations and their everyday technology requirements.",
    tags: ["HEALTHCARE", "TECHNOLOGY"],
  },
  {
    title: "Education",
    description:
      "Technology solutions that help educational institutions manage computing, software and day-to-day technology needs.",
    tags: ["EDUCATION", "IT SUPPORT"],
  },
  {
    title: "Hospitality",
    description:
      "Business technology supporting hospitality operations, POS systems, computing and reliable day-to-day services.",
    tags: ["HOSPITALITY", "POS"],
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="industries section">
      <div className="container">

        {/* HEADER */}
        <div className="industries-header">

          <span className="industries-tag">
            Industries We Serve
          </span>

          <h2 className="industries-heading">
            Technology for Different Business Environments
          </h2>

          <p className="industries-description">
            Our technology solutions support businesses across different
            operating environments, with solutions shaped around their
            practical technology requirements.
          </p>

        </div>


        {/* INDUSTRIES */}
        <div className="industries-grid">

          {industries.map((industry, index) => (
            <article
              className="industry-card"
              key={index}
            >

              <div className="industry-card-content">

                <h3 className="industry-card-title">
                  {industry.title}
                </h3>

                <p className="industry-card-description">
                  {industry.description}
                </p>

              </div>


              <div className="industry-card-footer">

                <div className="industry-tags">
                  {industry.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="industry-arrow">
                  →
                </span>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;