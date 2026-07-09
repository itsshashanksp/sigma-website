import {
  FaBookOpen,
  FaWordpress,
  FaShareAlt,
  FaBarcode,
  FaEye,
  FaShieldAlt, 
  FaWrench,
} from "react-icons/fa";

const products = [
  {
    icon: <FaEye />,
    title: "Creator of BINS",
    description:
      "BINS is SIGMA's flagship Point of Sale (POS) solution, successfully serving businesses for more than 30 years. Built for reliability, efficiency, and scalability, it empowers organizations to simplify operations and enhance productivity.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Dealers of POS Equipment",
    description:
      "SIGMA provides a complete range of POS hardware, including computers, receipt printers, barcode scanners, cash drawers, and other essential equipment. Our solutions are carefully selected to integrate seamlessly with BINS for reliable business operations.",
  },
  {
    icon: <FaWrench />,
    title: "After-Sales Services",
    description:
      "Our commitment continues beyond installation. We offer comprehensive after-sales support, including software updates, hardware maintenance, troubleshooting, and technical assistance to ensure your POS system operates smoothly at all times.",
  },
  {
    icon: <FaBookOpen />,
    title: "DearFlip",
    description:
      "Interactive 3D Flipbook plugin for WordPress with responsive design and realistic page-flipping effects.",
  },
  {
    icon: <FaWordpress />,
    title: "JS DearFlip",
    description:
      "A JavaScript-based flipbook solution that works across modern browsers without WordPress dependency.",
  },
  {
    icon: <FaBarcode />,
    title: "Barcode Solutions",
    description:
      "Complete barcode hardware and software solutions for retail, logistics, warehouses, and enterprises.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="products section">
      <div className="container">

        <span className="section-tag">
          Our Products
        </span>

        <h2 className="section-heading">
          Innovative Products Built for Modern Businesses
        </h2>

        <div className="products-grid">

          {products.map((product, index) => (

            <div className="product-card" key={index}>

              <div className="product-icon">
                {product.icon}
              </div>

              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <button className="primary-btn">
                Learn More
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
