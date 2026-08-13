const businessSolutions = [
  {
    title: "BINS POS",
    description:
      "Sigma's POS software solution designed to support day-to-day business operations, billing and retail management.",
    tags: ["POS SOFTWARE", "BUSINESS OPERATIONS"],
  },
  {
    title: "POS & Barcode Systems",
    description:
      "POS terminals, barcode scanners, receipt printers and related billing hardware for business operations.",
    tags: ["POS SYSTEMS", "BARCODE", "BILLING"],
  },
  {
    title: "Business Computing",
    description:
      "Desktop computers, laptops and workstations designed to support everyday business requirements.",
    tags: ["COMPUTERS", "WORKSTATIONS", "BUSINESS IT"],
  },
  {
    title: "Networking & Infrastructure",
    description:
      "Networking equipment and infrastructure solutions for reliable and connected business environments.",
    tags: ["NETWORKING", "INFRASTRUCTURE", "CONNECTIVITY"],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="products section">
      <div className="container">

        {/* HEADER */}
        <div className="products-header">

          <div className="products-header-label">
            <span className="products-tag">
              Our Products
            </span>
          </div>

          <div className="products-header-content">

            <h2 className="products-heading">
              Technology Solutions for Your Business
            </h2>

            <p className="products-description">
              Software, hardware and technology solutions designed to support
              the everyday needs of modern businesses.
            </p>

          </div>

        </div>


        {/* PRODUCTS */}
        <div className="products-grid">

          {businessSolutions.map((product, index) => (
            <article
              className="product-card"
              key={index}
            >

              <div className="product-card-content">

                <h3 className="product-card-title">
                  {product.title}
                </h3>

                <p className="product-card-description">
                  {product.description}
                </p>

              </div>


              <div className="product-card-footer">

                <div className="product-tags">

                  {product.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProductsSection;