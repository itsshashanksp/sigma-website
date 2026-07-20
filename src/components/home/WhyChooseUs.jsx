import {
  FaAward,
  FaUsers,
  FaHeadset,
  FaShieldAlt,
  FaCogs,
  FaBuilding,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "30+ Years of Experience",
    description:
      "Delivering reliable software, hardware and IT solutions with over three decades of proven industry experience.",
  },
  {
    icon: <FaUsers />,
    title: "Customer-First Approach",
    description:
      "We understand every business is unique and deliver solutions focused on long-term customer success.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Technology Partner",
    description:
      "Businesses rely on SIGMA for dependable technology, quality service and lasting partnerships.",
  },
  {
    icon: <FaHeadset />,
    title: "Reliable & Scalable Solutions",
    description:
      "Our solutions are designed to grow with your business while ensuring stability, performance and reliability.",
  },
  {
    icon: <FaCogs />,
    title: "Experienced Professionals",
    description:
    "Our skilled team combines technical expertise with practical business knowledge to deliver effective solutions.",
  },
  {
    icon: <FaBuilding />,
    title: "Commitment to Quality",
    description:
      "We focus on delivering high-quality products and services that meet the highest standards of performance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why" className="why section">
      <div className="container">
        <span className="section-tag">
          Why Choose Us
        </span>

        <h2 className="section-heading">
          Why Businesses Trust SIGMA
        </h2>

        <p className="section-description">
          For more than 30 years, businesses have trusted SIGMA for dependable technology solutions, experienced professionals and a commitment to delivering lasting value through quality products and services.
        </p>

        <div className="services-grid">
          {features.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
