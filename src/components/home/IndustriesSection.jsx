const industries = [
  "Retail",
  "Education",
  "Healthcare",
  "Manufacturing",
  "Logistics",
  "Small & Medium Businesses",
  "Government",
  "Corporate Enterprises",
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="industries section">
      <div className="container">

        <span className="section-tag">Industries We Serve</span>

        <h2 className="section-heading">
          Delivering Solutions Across Multiple Industries
        </h2>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <h3>{industry}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
