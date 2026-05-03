<?php
$pageTitle = 'Folke. - Cart';
$pageCss = 'cart.css';
$pageJs = 'cart-page.js';
$activePage = 'cart';
include 'includes/head.php';
include 'includes/header.php';
?>
<main class="cart-page">
  <section class="cart-shell">
    <h1 class="cart-title">Your Cart</h1>

    <p id="cart-empty" class="cart-empty">Your cart is empty. Add products from the product page.</p>

    <div id="cart-items" class="cart-items" aria-live="polite"></div>

    <aside class="cart-summary">
      <div class="cart-summary-row">
        <span>Subtotal</span>
        <strong id="cart-subtotal">IDR 0</strong>
      </div>
      <p class="cart-note">Client-side demo only. Cart data is stored in your browser localStorage.</p>
      <div class="cart-actions">
        <button id="clear-cart-btn" class="cart-btn cart-btn-outline" type="button">Clear Cart</button>
        <button class="cart-btn cart-btn-primary" type="button">Checkout</button>
      </div>
    </aside>
  </section>
</main>
<?php
include 'includes/footer.php';
?>
