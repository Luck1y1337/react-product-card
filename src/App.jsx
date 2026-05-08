import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p className="app-subtitle">React Props — Amaliy Mashq</p>
        <h1 className="app-title">Mahsulot Kartasi</h1>
      </header>

      <main className="cards-grid">
        <ProductCard
          name="iPhone 15"
          price={12500000}
          image="https://placehold.co/280x200/e0e7ff/4f46e5?text=iPhone+15"
          inStock={true}
          category="Telefon"
        />

        <ProductCard
          name="Samsung Galaxy S24"
          price={9800000}
          image="https://placehold.co/280x200/fce7f3/be185d?text=Galaxy+S24"
          inStock={false}
          category="Telefon"
        />

        <ProductCard
          name="Xiaomi 14"
          price={7600000}
          image="https://placehold.co/280x200/dcfce7/15803d?text=Xiaomi+14"
          inStock={true}
          category="Telefon"
        />

        <ProductCard
          name="MacBook Air M3"
          price={22000000}
          image="https://placehold.co/280x200/fef9c3/a16207?text=MacBook+Air"
          inStock={true}
          category="Noutbuk"
        />

        <ProductCard
          name="iPad Pro 12.9"
          price={16500000}
          image="https://placehold.co/280x200/f0fdf4/166534?text=iPad+Pro"
          inStock={false}
          category="Planshet"
        />

        <ProductCard
          name="AirPods Pro 2"
          price={4200000}
          inStock={true}
          category="Aksesuar"
        />
      </main>
    </div>
  );
}

export default App;
