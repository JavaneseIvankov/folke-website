   <footer class="footer">
      <div class="footer-content">
         <div class="footer-brand">
            <img src="/assets/img/folke-logo.svg" alt="Folke." class="footer-logo" onerror="this.src='/assets/img/logo.png'">
            <div class="social-links">
               <a href="#" class="social-link" aria-label="X">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <line x1="18" y1="6" x2="6" y2="18"></line>
                     <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
               </a>
               <a href="#" class="social-link" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
               </a>
            </div>
         </div>
         <div class="footer-links">
            <h4 class="footer-title">Resources</h4>
            <ul>
               <li><a href="#">Blog</a></li>
               <li><a href="#">Best practices</a></li>
               <li><a href="#">Colors</a></li>
               <li><a href="#">Color wheel</a></li>
               <li><a href="#">Support</a></li>
               <li><a href="#">Developers</a></li>
               <li><a href="#">Resource library</a></li>
            </ul>
         </div>
      </div>
   </footer>
   <?php if (isset($pageJs)): ?>
   <?php foreach((array)$pageJs as $js): ?>
   <script src="/assets/js/<?= $js ?>"></script>
   <?php endforeach; ?>
   <?php endif; ?>
</body>
</html>
