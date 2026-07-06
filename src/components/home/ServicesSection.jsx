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
    title: "Software Development",
    description:
      "Custom web applications and business software tailored to your requirements.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Plugin Development",
    description:
      "Professional WordPress and JavaScript plugins including DearFlip solutions.",
  },
  {
    icon: <FaServer />,
    title: "IT Consulting",
    description:
      "Helping businesses adopt reliable and scalable technology solutions.",
  },
  {
    icon: <FaBarcode />,
    title: "Barcode Solutions",
    description:
      "Barcode printers, scanners, labels and complete barcode infrastructure.",
  },
  {
    icon: <FaDesktop />,
    title: "Hardware Solutions",
    description:
      "Computer peripherals, laptop accessories and enterprise hardware.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Enterprise Solutions",
    description:
      "End-to-end technology solutions for businesses of all sizes.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services section">
      <div className="container">

        <span className="section-tag">Our Services</span>

        <h2 className="section-heading">
          Technology Solutions That Drive Business Success
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
