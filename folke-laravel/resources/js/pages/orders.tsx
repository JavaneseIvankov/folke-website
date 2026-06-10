import { Head, usePage } from '@inertiajs/react';

type OrderItem = {
    product_id: number;
    name: string;
    variant: string | null;
    quantity: number;
    unit_price: number;
    total_price: number;
};

type Order = {
    id: number;
    order_number: string;
    status: string;
    item_count: number;
    total_amount: number;
    items: OrderItem[];
    created_at: string;
};

type PageProps = {
    orders: Order[];
} & ReturnType<typeof usePage>['props'];

function formatIDR(value: number): string {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(value);
}

export default function OrdersPage() {
    const { orders } = usePage().props as PageProps;
    const isEmpty = orders.length === 0;

    return (
        <>
            <Head title="Order History" />
            <main className="orders-page" style={{ padding: '2rem 4%' }}>
                <section className="orders-shell">
                    <h1>Order History</h1>

                    {isEmpty ? (
                        <p>
                            Your past orders will appear here once you place
                            them.
                        </p>
                    ) : (
                        <div className="orders-list">
                            {orders.map((order) => (
                                <article key={order.id} className="order-card">
                                    <div className="order-header">
                                        <strong>{order.order_number}</strong>
                                        <span>{order.status}</span>
                                    </div>
                                    <p>
                                        {new Date(
                                            order.created_at,
                                        ).toLocaleString()}
                                    </p>
                                    <div className="order-summary">
                                        <span>{order.item_count} item(s)</span>
                                        <strong>
                                            {formatIDR(order.total_amount)}
                                        </strong>
                                    </div>
                                    <ul>
                                        {order.items.map((item, index) => (
                                            <li key={index}>
                                                {item.name} x{item.quantity} —{' '}
                                                {formatIDR(item.total_price)}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
