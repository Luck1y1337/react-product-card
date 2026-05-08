import "./ProductCard.css";

function ProductCard({ name, price, image, inStock, category }) {
  let formattedPrice = new Intl.NumberFormat("uz-UZ").format(price) + " so'm";

  let categoryEmoji = "📦";
  if (category === "Telefon") categoryEmoji = "📱";
  if (category === "Noutbuk") categoryEmoji = "💻";
  if (category === "Planshet") categoryEmoji = "📟";
  if (category === "Aksesuar") categoryEmoji = "🎧";

  let placeholderImage = "https://placehold.co/280x200/1a1a2e/e2e8f0?text=No+Image";
  let displayImage = image ? image : placeholderImage;

  return (
    <div className="product-card">
      <div className="card-image-wrapper">
        <img src={displayImage} alt={name} className="card-image" />
        {category && (
          <span className="category-badge">
            {categoryEmoji} {category}
          </span>
        )}
      </div>

      <div className="card-body">
        <h2 className="card-name">{name}</h2>
        <p className="card-price">{formattedPrice}</p>

        <div className={"stock-badge " + (inStock ? "in-stock" : "out-of-stock")}>
          {inStock ? "✅ Mavjud" : "❌ Tugagan"}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
