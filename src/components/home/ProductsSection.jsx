import {
  FaCashRegister,
  FaGlobe,
  FaMobileAlt,
  FaCode,
  FaTools,
  FaDesktop,
  FaBarcode,
  FaPrint,
  FaNetworkWired,
  FaLaptop,
  FaPlug,
} from "react-icons/fa";

const softwareSolutions = [
  {
    icon: <FaCode />,
    title: "Business Software",
    description: "Custom business applications, ERP systems and workflow automation tailored to your organization.",
  },
  {
    icon: <FaCashRegister />,
    title: "BINS POS",
    description: "Reliable point-of-sale software trusted by businesses for efficient billing and retail management.",
  },
  {
    icon: <FaGlobe />,
    title: "Websites & Digital Solutions",
    description: "Professional business websites, e-commerce platforms and digital solutions that strengthen your online presence",
  },
];

const hardwareSolutions = [
  {
    icon: <FaBarcode />,
    title: "POS & Barcode Systems",
    description: "Complete POS terminals, barcode scanners, receipt printers and billing hardware.",
  },
  {
    icon: <FaDesktop />,
    title: "Business Computing",
    description: "Desktop computers, laptops, workstations and business IT hardware for every workplace.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Networking & Infrastructure",
    description: "Routers, switches, structured cabling and secure network infrastructure for modern businesses.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="products section">
      <div className="container">

        <span className="section-tag">
          Business Solutions
        </span>

        <h2 className="section-heading">
          Complete Software & Hardware Solutions
        </h2>

        <p className="section-description">
          From business software to enterprise hardware, SIGMA provides integrated technology solutions that help organizations improve efficiency, productivity and long-term growth.
        </p>

        {/* SOFTWARE */}

        <div className="solution-block">

          <div className="solution-header">
            <h3>Software Solutions</h3>
            <p>
                Powerful software solutions designed to automate business processes,
                improve productivity and support long-term business growth.
            </p>
          </div>

          <div className="products-grid">

            {softwareSolutions.map((item, index) => (

              <div
                className="product-card"
                key={index}
              >

                <div className="product-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* HARDWARE */}

        <div className="solution-block">

          <div className="solution-header">
            <h3>Hardware Solutions</h3>

            <p>
                Reliable IT hardware and infrastructure solutions that power modern
                businesses with performance, stability and scalability.
            </p>
          </div>

          <div className="products-grid">

            {hardwareSolutions.map((item, index) => (

              <div
                className="product-card"
                key={index}
              >

                <div className="product-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
