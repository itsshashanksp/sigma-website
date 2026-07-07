import {
  FaBookOpen,
  FaWordpress,
  FaShareAlt,
  FaBarcode,
} from "react-icons/fa";

const products = [
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
    icon: <FaShareAlt />,
    title: "MashShare",
    description:
      "High-performance social sharing plugin designed to increase engagement and website traffic.",
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
