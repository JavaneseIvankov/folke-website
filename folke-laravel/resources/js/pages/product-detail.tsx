import '../../css/product-detail.css';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { ProductImageCarousel } from '@/components/product-image-carousel';
import { App, Inertia as InertiaTypes } from '@/wayfinder/types';

type PageProps = InertiaTypes.Pages.ProductDetail;

function InfoBlock({
    title,
    children,
    style,
}: React.PropsWithChildren<{
    title: string;
    style?: React.CSSProperties;
}>) {
    return (
        <div className="pd-info-block" style={style}>
            <h3 className="pd-info-title">{title}</h3>

            {children}
        </div>
    );
}

function isLightColor(hex: string) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 127.5;
}

function VariantButton({
    variant,
    isSelected,
    onSelect,
}: {
    variant: App.Models.ProductVariant;
    isSelected: boolean;
    onSelect: () => void;
}) {
    const isLight = isLightColor(variant.color);

    return (
        <button
            className={`pd-variant-btn ${isSelected ? 'is-selected' : ''}`}
            data-variant={variant.name}
            type="button"
            style={{
                backgroundColor: variant.color,
                color: isLight ? '#222' : undefined,
            }}
            onClick={onSelect}
        >
            {variant.name}
        </button>
    );
}

function RatingStars() {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const displayedRating = hoveredRating || rating;

    return (
        <>
            <div className="pd-rating-stars">
                {Array.from({ length: 5 }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`pd-star ${displayedRating >= index + 1 ? 'is-active' : ''}`}
                        data-value={index + 1}
                        aria-label={`Rate ${index + 1} out of 5`}
                        onMouseEnter={() => setHoveredRating(index + 1)}
                        onMouseLeave={() => setHoveredRating(0)}
                        onClick={() => setRating(index + 1)}
                    >
                        &#9733;
                    </button>
                ))}
            </div>

            <p className="pd-rating-text">
                Your rating: <span className="pd-rating-value">{rating}</span>/5
            </p>
        </>
    );
}

export default function ProductDetailPage() {
    const { product, auth } = usePage<PageProps>().props;
    const productImages = product.images ?? [];
    const thumbnails =
        productImages.length > 0
            ? productImages.map((image) => image.image_url)
            : [product.image_url];
    const variants = product.variants ?? [];
    const materials = product.materials ?? [];
    const [selectedVariantId, setSelectedVariantId] = useState<number | null>(
        variants[0]?.id ?? null,
    );
    const [addedFeedback, setAddedFeedback] = useState(false);
    const priceDisplay = product.price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    function handleAddToCart() {
        if (!auth.user) {
            router.visit('/login');

            return;
        }

        router.post(
            '/cart',
            {
                product_id: product.id,
                variant_id: selectedVariantId,
                quantity: 1,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setAddedFeedback(true);
                    setTimeout(() => setAddedFeedback(false), 900);
                },
            },
        );
    }

    return (
        <main className="product-detail-page">
            <section className="pd-product-container">
                <ProductImageCarousel
                    productName={product.name}
                    images={thumbnails}
                />

                <section className="pd-details-section">
                    <h1 className="pd-product-title font-regular!">
                        {product.name}
                    </h1>

                    <div className="pd-price-row">
                        <span className="pd-price text-3xl! opacity-80">
                            {priceDisplay}
                        </span>

                        <button
                            className="filter-btn active flex gap-4 py-4!"
                            type="button"
                            onClick={handleAddToCart}
                        >
                            <span className="btn-add-cart-label">
                                {addedFeedback ? 'Added!' : 'Add to cart'}
                            </span>

                            <img
                                src="/Vector.png"
                                alt="Cart Icon"
                                className="cart-btn-icon"
                            />
                        </button>
                    </div>

                    <InfoBlock title="Product description">
                        <p className="pd-info-text">{product.description}</p>
                    </InfoBlock>

                    <InfoBlock title="Material">
                        <ul className="pd-info-list">
                            {materials.map((material) => (
                                <li key={material.id}>
                                    {material.percentage}% {material.material}
                                </li>
                            ))}
                        </ul>
                    </InfoBlock>

                    <InfoBlock title="Variant">
                        <div className="pd-variant-options">
                            {variants.map((variant) => (
                                <VariantButton
                                    key={variant.id}
                                    variant={variant}
                                    isSelected={
                                        selectedVariantId === variant.id
                                    }
                                    onSelect={() =>
                                        setSelectedVariantId(variant.id)
                                    }
                                />
                            ))}
                        </div>
                    </InfoBlock>

                    <InfoBlock
                        title="Rate this product"
                        style={{ marginTop: '25px' }}
                    >
                        <RatingStars />
                    </InfoBlock>
                </section>
            </section>
        </main>
    );
}
