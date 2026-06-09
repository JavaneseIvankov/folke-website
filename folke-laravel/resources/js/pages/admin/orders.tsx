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
    user?: {
        email: string;
    } | null;
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

export default function AdminOrdersPage() {
    const { orders } = usePage().props as PageProps;
    const isEmpty = orders.length === 0;

    return (
        <>
            <Head title="All Orders" />

            <main className="orders-page px-6 pb-12 pt-8">
                <section className="orders-shell mx-auto max-w-6xl">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                                Admin order history
                            </p>
                            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                                All user orders
                            </h1>
                            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                                View every order placed by users across the application.
                            </p>
                        </div>
                    </div>

                    {isEmpty ? (
                        <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center text-sm text-gray-500">
                            No orders have been placed yet.
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {orders.map((order) => (
                                <article key={order.id} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{order.user?.email ?? 'Unknown user'}</p>
                                            <h2 className="mt-2 text-lg font-semibold">{order.order_number}</h2>
                                            <p className="text-sm text-gray-500">{new Date(order.created_at).toLocaleString()}</p>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span>{order.item_count} item(s)</span>
                                            <strong>{formatIDR(order.total_amount)}</strong>
                                            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-700">{order.status}</span>
                                        </div>
                                    </div>

                                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                        {order.items.map((item, index) => (
                                            <li key={index}>
                                                {item.name} x{item.quantity} — {formatIDR(item.total_price)} {item.variant ? `(${item.variant})` : ''}
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
