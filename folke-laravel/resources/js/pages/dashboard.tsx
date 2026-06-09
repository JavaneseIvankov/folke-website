import { Head, Link, router, usePage } from '@inertiajs/react';
import { ProductCard } from '@/components/product-card';

type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    image_url: string;
};

type PageProps = {
    products: Product[];
    auth: {
        user: {
            email?: string;
        } | null;
    };
    flash: {
        success?: string;
    };
} & ReturnType<typeof usePage>['props'];

const formatPrice = (price: number) =>
    price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

export default function Dashboard() {
    const { products: rawProducts, auth, flash } = usePage().props as PageProps;
    const products = rawProducts.map((product) => ({
        ...product,
        price_string: formatPrice(product.price),
    }));
    const isAdmin = auth.user?.email === 'admin@example.com';

    return (
        <>
            <Head title="Dashboard" />

            <div className="dashboard-page px-6 pb-12 pt-8">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                            Admin panel
                        </p>
                        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                            Product management
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                            Add new products here and they will be visible to users on the home page and product pages.
                        </p>
                    </div>

                    {isAdmin ? (
                        <Link
                            href="/admin/products/create"
                            className="btn btn-brown"
                        >
                            Add new product
                        </Link>
                    ) : null}
                </div>

                {flash?.success ? (
                    <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
                        {flash.success}
                    </div>
                ) : null}

                <section className="mt-8">
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="text-xl font-semibold">Available products</h2>
                        <p className="text-sm text-gray-500">{products.length} product{products.length === 1 ? '' : 's'}</p>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <Link href={`/products/${product.id}`} className="block rounded-3xl transition duration-300 hover:shadow-lg">
                                        <ProductCard product={product} />
                                    </Link>

                                    {isAdmin ? (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (
                                                    window.confirm(
                                                        'Are you sure you want to delete this product?'
                                                    )
                                                ) {
                                                    router.delete(`/admin/products/${product.id}`, {
                                                        preserveScroll: true,
                                                    });
                                                }
                                            }}
                                            className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-red-700 shadow-sm transition hover:bg-red-50"
                                        >
                                            Delete
                                        </button>
                                    ) : null}
                                </div>
                            ))
                        ) : (
                            <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center text-sm text-gray-500">
                                No products are available yet.
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}
