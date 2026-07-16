import {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaBarcode,
  FaPuzzlePiece,
  FaDesktop,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "POS Software Solutions",
    description:
      "Custom web applications and business software tailored to your requirements.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Custom Software Development",
    description:
      "Professional WordPress and JavaScript plugins including DearFlip solutions.",
  },
  {
    icon: <FaServer />,
    title: "Website & Mobile App Development",
    description:
      "Helping businesses adopt reliable and scalable technology solutions.",
  },
  {
    icon: <FaBarcode />,
    title: "Barcode & POS Solutions",
    description:
      "Barcode printers, scanners, labels and complete barcode infrastructure.",
  },
  {
    icon: <FaDesktop />,
    title: "IT Infrastructure & Hardware",
    description:
      "Computer peripherals, laptop accessories and enterprise hardware.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Technology Consulting & Support",
    description:
      "End-to-end technology solutions for businesses of all sizes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services section">
      <div className="container">

        <span className="section-tag">Our Expertise</span>

        <h2 className="section-heading">
          Technology Services Tailored for Modern Businesses
        </h2>

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
