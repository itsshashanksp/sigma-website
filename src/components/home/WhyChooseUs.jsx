import {
  FaAward,
  FaUsers,
  FaHeadset,
  FaLightbulb,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "20+ Years Experience",
    description: "Delivering reliable technology solutions for over two decades.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    description: "Experienced professionals dedicated to quality and innovation.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Solutions",
    description: "Reliable software, hardware and consulting services.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Products",
    description: "Building plugins and software for businesses worldwide.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    description: "Committed to long-term customer satisfaction and assistance.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    description: "Efficient execution with timely project completion.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why section">
      <div className="container">
        <span className="section-tag">Why Choose Us</span>

        <h2 className="section-heading">
          Trusted Technology Partner for Your Business
        </h2>

        <div className="services-grid">
          {features.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{item.icon}</div>
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
