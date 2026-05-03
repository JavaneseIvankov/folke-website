<?php
$pageTitle = 'Folke. - Home';
$pageCss = 'home.css';
$activePage = 'home';
include 'includes/head.php';
include 'includes/header.php';
?>
   <main>
      <section class="hero-section">
         <div class="hero-image-wrapper">
            <img class="hero-main-img"
               src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
               alt="Smiling woman wearing a beanie" />
         </div>
         <div class="hero-content">
            <div class="hero-text">
               <h1>Wear Simple,</h1>
               <h1>Live Well</h1>
               <a href="#" class="btn btn-brown mt-4">Shop Now</a>
            </div>
            <img class="hero-secondary-img"
               src="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=600&auto=format&fit=crop&q=80"
               alt="Clothes rack" />
         </div>
      </section>

      <section class="products-section">
         <div class="products-header">
            <h2>Our Products</h2>
            <div class="search-container">
               <input type="text" class="search-input" placeholder="Search for matching products..." />
               <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
               </svg>
            </div>
            <div class="filter-group">
               <button class="filter-btn active">All</button>
               <button class="filter-btn">Clothing</button>
               <button class="filter-btn">Accessories</button>
            </div>
         </div>

         <div class="products-grid">
            <!-- Product 1 -->
            <div class="product-card">
               <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80"
                  alt="Classic White Tee" class="product-img">
               <div class="product-info">
                  <h3 class="product-title">Classic White Tee</h3>
                  <p class="product-category">Clothing</p>
                  <p class="product-price">IDR 249.000,00</p>
               </div>
            </div>
            <!-- Product 2 -->
            <div class="product-card">
               <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80"
                  alt="Vintage Jacket" class="product-img">
               <div class="product-info">
                  <div>
                     <h3 class="product-title">Vintage Jacket</h3>
                     <p class="product-category">Clothing</p>
                  </div>
                  <p class="product-price">IDR 1.499.000,00</p>
               </div>
            </div>
            <!-- Product 3 -->
            <div class="product-card">
               <img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&auto=format&fit=crop&q=80"
                  alt="Crimson Wool Scarf" class="product-img">
               <div class="product-info">
                  <h3 class="product-title">Crimson Wool Scarf</h3>
                  <p class="product-category">Accessories</p>
                  <p class="product-price">IDR 299.000,00</p>
               </div>
            </div>
            <!-- Product 4 -->
            <div class="product-card">
               <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=80"
                  alt="Sienna Leather Tote" class="product-img">
               <div class="product-info">
                  <h3 class="product-title">Sienna Leather Tote</h3>
                  <p class="product-category">Accessories</p>
                  <p class="product-price">IDR 2.499.000,00</p>
               </div>
            </div>
            <!-- Product 5 -->
            <div class="product-card">
               <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80"
                  alt="Ivory Cotton Knit" class="product-img">
               <div class="product-info">
                  <h3 class="product-title">Ivory Cotton Knit</h3>
                  <p class="product-category">Clothing</p>
                  <p class="product-price">IDR 599.000,00</p>
               </div>
            </div>
            <!-- Product 6 -->
            <div class="product-card">
               <img src="https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&auto=format&fit=crop&q=80"
                  alt="Onyx Chelsea Boots" class="product-img">
               <div class="product-info">
                  <h3 class="product-title">Onyx Chelsea Boots</h3>
                  <p class="product-category">Accessories</p>
                  <p class="product-price">IDR 1.899.000,00</p>
               </div>
            </div>
         </div>
      </section>
   </main>
<?php
include 'includes/footer.php';
?>
