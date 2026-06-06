import { useState } from 'react';

type ProductImageCarouselProps = {
    productName: string;
    images: string[];
};

export function ProductImageCarousel({
    productName,
    images,
}: ProductImageCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const safeImages = images.length > 0 ? images : [''];
    const activeImage = safeImages[activeIndex] ?? safeImages[0];

    function showPreviousImage() {
        setActiveIndex((currentIndex) =>
            currentIndex === 0 ? safeImages.length - 1 : currentIndex - 1,
        );
    }

    function showNextImage() {
        setActiveIndex((currentIndex) =>
            currentIndex === safeImages.length - 1 ? 0 : currentIndex + 1,
        );
    }

    return (
        <section className="pd-gallery-section">
            <div className="pd-main-image-wrapper">
                <button
                    type="button"
                    className="pd-carousel-arrow prev-arrow"
                    onClick={showPreviousImage}
                    aria-label="Show previous image"
                >
                    <img src="/weui_arrow-filled.png" alt="" />
                </button>

                <img
                    src={activeImage}
                    alt={productName}
                    className="pd-main-image"
                />

                <button
                    type="button"
                    className="pd-carousel-arrow next-arrow"
                    onClick={showNextImage}
                    aria-label="Show next image"
                >
                    <img src="/weui_arrow-filled.png" alt="" />
                </button>
            </div>

            <div className="pd-thumbnails">
                {safeImages.map((thumbnail, index) => (
                    <button
                        key={`${thumbnail}-${index}`}
                        type="button"
                        className={`pd-thumb-button ${index === activeIndex ? 'is-active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show image ${index + 1}`}
                    >
                        <img
                            src={thumbnail}
                            alt={`${productName} thumbnail ${index + 1}`}
                            className="pd-thumb"
                        />
                    </button>
                ))}
            </div>
        </section>
    );
}
