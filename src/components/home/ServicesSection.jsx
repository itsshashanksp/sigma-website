import {
  FaLaptopCode,
  FaServer,
  FaPuzzlePiece,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPuzzlePiece />,
    title: "Custom Software Development",
    description:
      "We design and develop custom software solutions tailored to streamline business operations and improve productivity.",
  },
  {
    icon: <FaServer />,
    title: "Website Development",
    description:
      "We build modern, responsive and SEO-friendly business websites that strengthen your online presence and drive growth.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Technology Consulting & Support",
    description:
      "We provide expert technology consulting, implementation and ongoing support to help businesses operate efficiently and confidently.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services section">
      <div className="container">

        <span className="section-tag">What We Do</span>

        <h2 className="section-heading">
          Technology Services That Help Businesses Grow
        </h2>

        <p>We help businesses transform their operations through custom software, professional websites and reliable technology support tailored to their unique requirements.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
