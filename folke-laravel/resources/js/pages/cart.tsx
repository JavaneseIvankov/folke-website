import '../../css/cart.css';
import { router } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';

interface CartItem {
    id: number;
    quantity: number;
    product: {
        id: number;
        name: string;
        image_url: string;
        price: number;
    };
    variant: {
        id: number;
        name: string;
        color: string;
    } | null;
}

interface CartPageProps {
    cartItems: CartItem[];
    subtotal: number;
}

function formatIDR(value: number): string {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(value);
}

export default function CartPage({ cartItems, subtotal }: CartPageProps) {
    const isEmpty = cartItems.length === 0;

    function updateQuantity(id: number, quantity: number) {
        router.patch(`/cart/${id}`, { quantity }, { preserveScroll: true });
    }

    function removeItem(id: number) {
        router.delete(`/cart/${id}`, { preserveScroll: true });
    }

    function clearCart() {
        router.delete('/cart', { preserveScroll: true });
    }

    return (
        <PublicLayout activePage="cart">
            <main className="cart-page">
                <section className="cart-shell">
                    <h1 className="cart-title">Your Cart</h1>

                    {isEmpty && (
                        <p className="cart-empty">
                            Your cart is empty. Add products from the product
                            page.
                        </p>
                    )}

                    {!isEmpty && (
                        <div className="cart-items" aria-live="polite">
                            {cartItems.map((item) => (
                                <article key={item.id} className="cart-item">
                                    <img
                                        className="cart-item-image"
                                        src={item.product.image_url}
                                        alt={item.product.name}
                                    />
                                    <div>
                                        <h3 className="cart-item-name">
                                            {item.product.name}
                                        </h3>
                                        <p className="cart-item-variant">
                                            Variant:{' '}
                                            {item.variant?.name ?? 'Default'}
                                        </p>
                                        <p className="cart-item-price">
                                            {formatIDR(item.product.price)} x{' '}
                                            {item.quantity}
                                        </p>
                                    </div>
                                    <div className="cart-item-controls">
                                        <div className="qty-control">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    item.quantity <= 1
                                                        ? removeItem(item.id)
                                                        : updateQuantity(
                                                              item.id,
                                                              item.quantity - 1,
                                                          )
                                                }
                                            >
                                                -
                                            </button>
                                            <span className="qty-value">
                                                {item.quantity}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.id,
                                                        item.quantity + 1,
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            className="cart-remove"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    <aside className="cart-summary">
                        <div className="cart-summary-row">
                            <span>Subtotal</span>
                            <strong>{formatIDR(subtotal)}</strong>
                        </div>
                        <p className="cart-note">
                            Shipping and taxes calculated at checkout.
                        </p>
                        <div className="cart-actions">
                            <button
                                className="cart-btn cart-btn-outline"
                                type="button"
                                onClick={clearCart}
                                disabled={isEmpty}
                            >
                                Clear Cart
                            </button>
                            <button
                                className="cart-btn cart-btn-primary"
                                type="button"
                            >
                                Checkout
                            </button>
                        </div>
                    </aside>
                </section>
            </main>
        </PublicLayout>
    );
}
