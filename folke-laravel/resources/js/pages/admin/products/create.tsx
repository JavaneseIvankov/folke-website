import { Head, Link, useForm, usePage } from '@inertiajs/react';

type PageProps = {
    auth: {
        user: {
            email?: string;
        } | null;
    };
} & ReturnType<typeof usePage>['props'];

export default function AdminProductCreate() {
    const { auth } = usePage().props as PageProps;
    const isAdmin = auth.user?.email === 'admin@example.com';
    const form = useForm({
        name: '',
        description: '',
        category: 'Clothing',
        price: 0,
        image_url: '',
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        form.post('/admin/products', {
            preserveScroll: true,
            onSuccess: () => {
                form.reset('name', 'description', 'category', 'price', 'image_url');
            },
        });
    }

    return (
        <>
            <Head title="Create Product" />

            <div className="mx-auto max-w-4xl px-6 pb-12 pt-8">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                            Product admin
                        </p>
                        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                            Create a new product
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                            This form saves the product immediately and makes it visible to users.
                        </p>
                    </div>
                    <Link href="/dashboard" className="btn btn-outline">
                        Back to dashboard
                    </Link>
                </div>

                {!isAdmin ? (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
                        You must be the seeded test admin user to add products.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-border bg-white p-6 shadow-sm">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                value={form.data.name}
                                onChange={(event) => form.setData('name', event.target.value)}
                                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-brown focus:outline-none"
                                type="text"
                                placeholder="Classic white tee"
                            />
                            {form.errors.name ? <p className="mt-2 text-sm text-red-600">{form.errors.name}</p> : null}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <input
                                value={form.data.category}
                                onChange={(event) => form.setData('category', event.target.value)}
                                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-brown focus:outline-none"
                                type="text"
                                placeholder="Clothing"
                            />
                            {form.errors.category ? <p className="mt-2 text-sm text-red-600">{form.errors.category}</p> : null}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price (IDR)</label>
                            <input
                                value={form.data.price}
                                onChange={(event) => form.setData('price', Number(event.target.value))}
                                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-brown focus:outline-none"
                                type="number"
                                min={0}
                                placeholder="249000"
                            />
                            {form.errors.price ? <p className="mt-2 text-sm text-red-600">{form.errors.price}</p> : null}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Image URL</label>
                            <input
                                value={form.data.image_url}
                                onChange={(event) => form.setData('image_url', event.target.value)}
                                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-brown focus:outline-none"
                                type="url"
                                placeholder="https://example.com/product.jpg"
                            />
                            {form.errors.image_url ? <p className="mt-2 text-sm text-red-600">{form.errors.image_url}</p> : null}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                value={form.data.description}
                                onChange={(event) => form.setData('description', event.target.value)}
                                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-brown focus:outline-none"
                                rows={5}
                                placeholder="A timeless white tee for any occasion."
                            />
                            {form.errors.description ? <p className="mt-2 text-sm text-red-600">{form.errors.description}</p> : null}
                        </div>

                        <button type="submit" disabled={form.processing} className="btn btn-brown w-full py-3 text-base">
                            {form.processing ? 'Saving...' : 'Create product'}
                        </button>
                    </form>
                )}
            </div>
        </>
    );
}
