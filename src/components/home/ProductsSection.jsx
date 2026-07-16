import {
  FaCashRegister,
  FaGlobe,
  FaMobileAlt,
  FaCode,
  FaBookOpen,
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
    icon: <FaCashRegister />,
    title: "BINS POS",
    description: "Powerful POS software trusted by businesses for over 30 years.",
  },
  {
    icon: <FaGlobe />,
    title: "Website Development",
    description: "Modern, responsive and SEO-friendly business websites.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    description: "Android & iOS applications tailored to your business needs.",
  },
  {
    icon: <FaCode />,
    title: "Custom Software",
    description: "Business applications built specifically for your workflow.",
  },
  {
    icon: <FaBookOpen />,
    title: "DearFlip Solutions",
    description: "Interactive digital flipbooks and publishing solutions.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Support",
    description: "Continuous updates, technical assistance and AMC services.",
  },
];

const hardwareSolutions = [
  {
    icon: <FaDesktop />,
    title: "POS Systems",
    description: "Complete billing and point-of-sale hardware solutions.",
  },
  {
    icon: <FaBarcode />,
    title: "Barcode Solutions",
    description: "Barcode scanners, labels and identification systems.",
  },
  {
    icon: <FaPrint />,
    title: "Printers",
    description: "Receipt, barcode and thermal printers for every business.",
  },
  {
    icon: <FaLaptop />,
    title: "Computers",
    description: "Desktop computers, laptops and business workstations.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Networking",
    description: "Routers, switches, structured cabling and network setup.",
  },
  {
    icon: <FaPlug />,
    title: "Accessories",
    description: "Peripherals, UPS, cables and essential IT accessories.",
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
          SIGMA delivers end-to-end business technology solutions by combining
          powerful software with reliable hardware, helping businesses improve
          productivity, efficiency and long-term growth.
        </p>

        {/* SOFTWARE */}

        <div className="solution-block">

          <div className="solution-header">
            <h3>Software Solutions</h3>
            <p>
              Smart digital solutions built to simplify and automate your
              business.
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
              Reliable hardware and IT infrastructure designed for modern
              businesses.
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
