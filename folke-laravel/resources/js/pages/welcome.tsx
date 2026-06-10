import { Head, usePage } from '@inertiajs/react';
import { ProductCard } from '@/components/product-card';
import { useState } from 'react';

type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    price_string: string;
    image_url: string;
};

type PageProps = {
    products: Product[];
    recommended_product: Product | null;
} & ReturnType<typeof usePage>['props'];

const formatPrice = (price: number) =>
    price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

export default function Welcome() {
    const { products: _products, recommended_product } = usePage().props as PageProps;
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');

    const products = _products.map((p) => ({
        ...p,
        price_string: formatPrice(p.price),
    }));

    const recommendedProduct = recommended_product
        ? {
              ...recommended_product,
              price_string: formatPrice(recommended_product.price),
          }
        : null;

    const categories = products.reduce<string[]>(
        (acc, product) => {
            if (!acc.includes(product.category)) {
                acc.push(product.category);
            }
            return acc;
        },
        ['All'],
    );

    const filteredProducts = products.filter((product) => {
        const matchesCategory = filter === 'All' || product.category === filter;
        const matchesSearch =
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Head title="Home" />
            <main>
                <section className="hero-section">
                    <div className="hero-image-wrapper">
                        <img
                            className="hero-main-img"
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
                            alt="Smiling woman wearing a beanie"
                        />
                    </div>
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Wear Simple,</h1>
                            <h1>Live Well</h1>
                            <a
                                href="#products-section"
                                className="btn btn-brown mt-4"
                            >
                                Shop Now
                            </a>
                        </div>
                        <img
                            className="hero-secondary-img"
                            src="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=600&auto=format&fit=crop&q=80"
                            alt="Clothes rack"
                        />
                    </div>
                </section>
                {recommendedProduct && (
                    <section className="products-section pb-0!">
                        <div className="products-header">
                            <h2>Most Sold</h2>
                        </div>
                        <div className="products-grid">
                            <a href={`/products/${recommendedProduct.id}`}>
                                <ProductCard product={recommendedProduct} />
                            </a>
                        </div>
                    </section>
                )}
                <section id="products-section" className="products-section">
                    <div className="products-header">
                        <h2>Our Products</h2>
                        <div className="search-container">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search for matching products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <svg
                                className="search-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line
                                    x1="21"
                                    y1="21"
                                    x2="16.65"
                                    y2="16.65"
                                ></line>
                            </svg>
                        </div>
                        <div className="filter-group">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="products-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <a href={`/products/${product.id}`}>
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                </a>
                            ))
                        ) : (
                            <p>No products found.</p>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}
