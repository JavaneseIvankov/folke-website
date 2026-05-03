const variantButtons = document.querySelectorAll('.variant-btn[data-variant]');
const addToCartButton = document.querySelector('.btn-add-cart[data-product-id]');

let selectedVariant = variantButtons.length ? variantButtons[0].dataset.variant : 'Default';

variantButtons.forEach((button, index) => {
  if (index === 0) {
    button.classList.add('is-selected');
  }

  button.addEventListener('click', () => {
    selectedVariant = button.dataset.variant || 'Default';
    variantButtons.forEach((item) => item.classList.remove('is-selected'));
    button.classList.add('is-selected');
  });
});

if (addToCartButton) {
  addToCartButton.addEventListener('click', () => {
    const id = addToCartButton.dataset.productId;
    const name = addToCartButton.dataset.productName;
    const image = addToCartButton.dataset.productImage;
    const price = Number(addToCartButton.dataset.productPrice || '0');
    const variant = selectedVariant || 'Default';

    const raw = localStorage.getItem('folke_cart');
    const cart = raw ? JSON.parse(raw) : [];

    const existingIndex = cart.findIndex(
      (item) => item.id === id && item.variant === variant
    );

    if (existingIndex >= 0) {
      cart[existingIndex].qty += 1;
    } else {
      cart.push({
        id,
        name,
        variant,
        price,
        image,
        qty: 1,
      });
    }

    localStorage.setItem('folke_cart', JSON.stringify(cart));

    const label = addToCartButton.querySelector('.btn-add-cart-label');
    if (label) {
      const previousText = label.textContent;
      label.textContent = 'Added';
      setTimeout(() => {
        label.textContent = previousText;
      }, 900);
    }
  });
}
