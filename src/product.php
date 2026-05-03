<?php
$pageTitle = 'Folke. - Product';
$pageCss = 'product.css';
$pageJs = ['klik_logic_rating_script.js', 'product-cart.js'];
$activePage = 'product';
include 'includes/head.php';
include 'includes/header.php';
?>
<main>
    <section class="product-container">
        <section class="gallery-section">
            <div class="main-image-wrapper">
                <img src="/assets/img/weui_arrow-filled.png" alt="Prev" class="arrow prev-arrow">
                <img src="/assets/img/Rectangle 14.png" alt="Classic Hoodie Main" class="main-image">
                <img src="/assets/img/weui_arrow-filled.png" alt="Next" class="arrow next-arrow">
            </div>

            <div class="thumbnails">
                <img src="/assets/img/Rectangle 15.png" alt="Thumb 1" class="thumb active">
                <img src="/assets/img/Rectangle 16.png" alt="Thumb 2" class="thumb">
                <img src="/assets/img/Rectangle 17.png" alt="Thumb 3" class="thumb">
                <img src="/assets/img/Rectangle 18.png" alt="Thumb 4" class="thumb">
            </div>
        </section>

        <section class="details-section">
            <h1 class="product-title">Classic hoodie</h1>

            <div class="price-row">
                <span class="price">$85,00</span>
                <button
                    class="btn-add-cart"
                    type="button"
                    data-product-id="classic-hoodie"
                    data-product-name="Classic hoodie"
                    data-product-price="85000"
                    data-product-image="/assets/img/Rectangle 14.png"
                >
                    <span class="btn-add-cart-label">Add to cart</span>
                    <img src="/assets/img/Vector.png" alt="Cart Icon" class="cart-btn-icon">
                </button>
            </div>

            <div class="info-block">
                <h3 class="info-title">Product description</h3>
                <p class="info-text">
                    A clean, everyday hoodie designed for comfort and effortless style.
                    Crafted with a soft cotton blend and a relaxed silhouette, this hoodie offers
                    warmth without feeling heavy.
                </p>
            </div>

            <div class="info-block">
                <h3 class="info-title">Material</h3>
                <ul class="info-list">
                    <li>80% Cotton</li>
                    <li>20% Polyester</li>
                </ul>
            </div>

            <div class="info-block">
                <h3 class="info-title">Variant</h3>
                <div class="variant-options">
                    <button class="variant-btn" data-variant="Red" type="button" style="background-color: #8f292b;">Red</button>
                    <button class="variant-btn" data-variant="Black" type="button" style="background-color: #222222;">Black</button>
                    <button class="variant-btn" data-variant="White" type="button" style="background-color: #e0e0e0; color: #222;">White</button>
                    <button class="variant-btn" data-variant="Brown" type="button" style="background-color: #6a4f44;">Brown</button>
                </div>
            </div>

            <div class="info-block" style="margin-top: 25px;">
                <h3 class="info-title">Rate this product</h3>
                <div class="rating-stars" id="stars" style="display: flex; gap: 5px; margin-top: 8px;">
                    <span class="star" data-value="1">&#9733;</span>
                    <span class="star" data-value="2">&#9733;</span>
                    <span class="star" data-value="3">&#9733;</span>
                    <span class="star" data-value="4">&#9733;</span>
                    <span class="star" data-value="5">&#9733;</span>
                </div>
                <p style="margin-top: 8px; font-size: 14px; color: #555;">
                    Your rating: <span id="nilai-rating" style="font-weight: 600;">0</span>/5
                </p>
            </div>
        </section>
    </section>
</main>
<?php
include 'includes/footer.php';
?>
