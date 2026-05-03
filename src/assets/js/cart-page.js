const itemsContainer = document.getElementById('cart-items');
const emptyState = document.getElementById('cart-empty');
const subtotalEl = document.getElementById('cart-subtotal');
const clearCartBtn = document.getElementById('clear-cart-btn');

function readCart() {
  const raw = localStorage.getItem('folke_cart');
  return raw ? JSON.parse(raw) : [];
}

function writeCart(cart) {
  localStorage.setItem('folke_cart', JSON.stringify(cart));
}

function formatIDR(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}

function renderCart() {
  const cart = readCart();
  itemsContainer.innerHTML = '';

  if (!cart.length) {
    emptyState.style.display = 'block';
    itemsContainer.style.display = 'none';
    subtotalEl.textContent = formatIDR(0);
    return;
  }

  emptyState.style.display = 'none';
  itemsContainer.style.display = 'flex';

  let subtotal = 0;

  cart.forEach((item, index) => {
    subtotal += Number(item.price) * Number(item.qty);

    const row = document.createElement('article');
    row.className = 'cart-item';

    const image = document.createElement('img');
    image.className = 'cart-item-image';
    image.src = item.image;
    image.alt = item.name;
    row.appendChild(image);

    const details = document.createElement('div');

    const name = document.createElement('h3');
    name.className = 'cart-item-name';
    name.textContent = item.name;
    details.appendChild(name);

    const variant = document.createElement('p');
    variant.className = 'cart-item-variant';
    variant.textContent = `Variant: ${item.variant}`;
    details.appendChild(variant);

    const price = document.createElement('p');
    price.className = 'cart-item-price';
    price.textContent = `${formatIDR(item.price)} x ${item.qty}`;
    details.appendChild(price);

    row.appendChild(details);

    const controls = document.createElement('div');
    controls.className = 'cart-item-controls';

    const qtyControl = document.createElement('div');
    qtyControl.className = 'qty-control';

    const dec = document.createElement('button');
    dec.type = 'button';
    dec.textContent = '-';
    dec.addEventListener('click', () => {
      const latest = readCart();
      if (!latest[index]) return;
      latest[index].qty -= 1;
      if (latest[index].qty <= 0) {
        latest.splice(index, 1);
      }
      writeCart(latest);
      renderCart();
    });

    const qtyValue = document.createElement('span');
    qtyValue.className = 'qty-value';
    qtyValue.textContent = String(item.qty);

    const inc = document.createElement('button');
    inc.type = 'button';
    inc.textContent = '+';
    inc.addEventListener('click', () => {
      const latest = readCart();
      if (!latest[index]) return;
      latest[index].qty += 1;
      writeCart(latest);
      renderCart();
    });

    qtyControl.appendChild(dec);
    qtyControl.appendChild(qtyValue);
    qtyControl.appendChild(inc);

    controls.appendChild(qtyControl);

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'cart-remove';
    remove.textContent = 'Remove';
    remove.addEventListener('click', () => {
      const latest = readCart();
      latest.splice(index, 1);
      writeCart(latest);
      renderCart();
    });

    controls.appendChild(remove);
    row.appendChild(controls);
    itemsContainer.appendChild(row);
  });

  subtotalEl.textContent = formatIDR(subtotal);
}

if (clearCartBtn) {
  clearCartBtn.addEventListener('click', () => {
    localStorage.removeItem('folke_cart');
    renderCart();
  });
}

renderCart();
