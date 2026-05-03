   <?php $activePage = isset($activePage) ? $activePage : ''; ?>
   <header class="header">
      <a href="/index.php">
         <img src="/assets/img/folke-logo.svg" alt="Folke." class="logo" onerror="this.src='/assets/img/logo.png'">
      </a>
      <nav class="nav-center">
         <a href="/index.php" class="nav-link <?= $activePage === 'home' ? 'active' : '' ?>">Home</a>
         <a href="/about.php" class="nav-link <?= $activePage === 'about' ? 'active' : '' ?>">About Us</a>
         <a href="/product.php" class="nav-link <?= $activePage === 'product' ? 'active' : '' ?>">Products</a>
      </nav>
      <div class="nav-actions">
         <a href="#" class="btn btn-outline">Sign in</a>
         <a href="#" class="btn btn-dark">Register</a>
         <a href="/cart.php" class="btn btn-cart <?= $activePage === 'cart' ? 'active' : '' ?>">
            Cart
            <span class="notification-dot"></span>
         </a>
      </div>
   </header>
