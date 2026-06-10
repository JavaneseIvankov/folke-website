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
        material: '',
        material: '',
        variants: [{ name: '', color: '' }],
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        form.post('/admin/products', {
            preserveScroll: true,
            onSuccess: () => {
                form.reset(
                    'name',
                    'description',
                    'category',
                    'price',
                    'image_url',
                    'material',
                    'variants',
                );
            },
        });
    }

    return (
        <>
            <Head title="Create Product" />

            <div className="mx-auto max-w-4xl px-6 pt-8 pb-12">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
                            Product admin
                        </p>
                        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                            Create a new product
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                            This form saves the product immediately and makes it
                            visible to users.
                        </p>
                    </div>
                    <Link href="/dashboard" className="btn btn-outline">
                        Back to dashboard
                    </Link>
                </div>

                {!isAdmin ? (
                    <div className="border border-red-200 bg-red-50 p-4 text-sm text-red-900">
                        You must be the seeded test admin user to add products.
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 border border-[#ccc] bg-white p-6 shadow-sm"
                    >
                        <div className="py-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                value={form.data.name}
                                onChange={(event) =>
                                    form.setData('name', event.target.value)
                                }
                                className="focus:border-brown mt-2 w-full border border-gray-300 px-4 py-3 focus:outline-none"
                                type="text"
                                placeholder="Classic white tee"
                            />
                            {form.errors.name ? (
                                <p className="mt-2 text-sm text-red-600">
                                    {form.errors.name}
                                </p>
                            ) : null}
                        </div>

                        <div className="py-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                value={form.data.category}
                                onChange={(event) =>
                                    form.setData('category', event.target.value)
                                }
                                className="focus:border-brown mt-2 w-full border border-gray-300 bg-white px-4 py-3 focus:outline-none"
                            >
                                <option value="Clothing">Clothing</option>
                                <option value="Accessories">Accessories</option>
                            </select>
                            {form.errors.category ? (
                                <p className="mt-2 text-sm text-red-600">
                                    {form.errors.category}
                                </p>
                            ) : null}
                        </div>

                        <div className="py-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Material
                            </label>
                            <input
                                value={form.data.material}
                                onChange={(event) =>
                                    form.setData('material', event.target.value)
                                }
                                className="focus:border-brown mt-2 w-full border border-gray-300 px-4 py-3 focus:outline-none"
                                type="text"
                                placeholder="Cotton, Leather, Nylon"
                            />
                            {form.errors.material ? (
                                <p className="mt-2 text-sm text-red-600">
                                    {form.errors.material}
                                </p>
                            ) : null}
                        </div>

                        <div className="py-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Price (IDR)
                            </label>
                            <input
                                value={form.data.price}
                                onChange={(event) =>
                                    form.setData(
                                        'price',
                                        Number(event.target.value),
                                    )
                                }
                                className="focus:border-brown mt-2 w-full border border-gray-300 px-4 py-3 focus:outline-none"
                                type="number"
                                min={0}
                                placeholder="249000"
                            />
                            {form.errors.price ? (
                                <p className="mt-2 text-sm text-red-600">
                                    {form.errors.price}
                                </p>
                            ) : null}
                        </div>

                        <div className="py-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Image URL
                            </label>
                            <input
                                value={form.data.image_url}
                                onChange={(event) =>
                                    form.setData(
                                        'image_url',
                                        event.target.value,
                                    )
                                }
                                className="focus:border-brown mt-2 w-full border border-gray-300 px-4 py-3 focus:outline-none"
                                type="url"
                                placeholder="https://example.com/product.jpg"
                            />
                            {form.errors.image_url ? (
                                <p className="mt-2 text-sm text-red-600">
                                    {form.errors.image_url}
                                </p>
                            ) : null}
                        </div>

                        <div className="py-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Variants (Name & Color)
                            </label>
                            {form.data.variants.map((variant, index) => (
                                <div
                                    key={index}
                                    className="mt-2 flex items-center gap-4"
                                >
                                    <input
                                        value={variant.name}
                                        onChange={(event) => {
                                            const newVariants = [
                                                ...form.data.variants,
                                            ];
                                            newVariants[index].name =
                                                event.target.value;
                                            form.setData(
                                                'variants',
                                                newVariants,
                                            );
                                        }}
                                        className="focus:border-brown w-full border border-gray-300 px-4 py-3 focus:outline-none"
                                        type="text"
                                        placeholder="Variant name (e.g., Large)"
                                        required
                                    />
                                    <input
                                        value={variant.color}
                                        onChange={(event) => {
                                            const newVariants = [
                                                ...form.data.variants,
                                            ];
                                            newVariants[index].color =
                                                event.target.value;
                                            form.setData(
                                                'variants',
                                                newVariants,
                                            );
                                        }}
                                        className="focus:border-brown w-full border border-gray-300 px-4 py-3 focus:outline-none"
                                        type="text"
                                        placeholder="Color hex (e.g., #ffffff)"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const newVariants =
                                                form.data.variants.filter(
                                                    (_, i) => i !== index,
                                                );
                                            form.setData(
                                                'variants',
                                                newVariants,
                                            );
                                        }}
                                        className="text-red-600 hover:text-red-800"
                                        title="Remove Variant"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => {
                                    form.setData('variants', [
                                        ...form.data.variants,
                                        { name: '', color: '' },
                                    ]);
                                }}
                                className="mt-2 text-sm text-blue-600 hover:underline"
                            >
                                + Add another variant
                            </button>
                            {form.errors.variants ? (
                                <p className="mt-2 text-sm text-red-600">
                                    {form.errors.variants}
                                </p>
                            ) : null}
                        </div>

                        <div className="py-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                value={form.data.description}
                                onChange={(event) =>
                                    form.setData(
                                        'description',
                                        event.target.value,
                                    )
                                }
                                className="focus:border-brown mt-2 w-full border border-gray-300 px-4 py-3 focus:outline-none"
                                rows={5}
                                placeholder="A timeless white tee for any occasion."
                            />
                            {form.errors.description ? (
                                <p className="mt-2 text-sm text-red-600">
                                    {form.errors.description}
                                </p>
                            ) : null}
                        </div>

                        <button
                            type="submit"
                            disabled={form.processing}
                            className="btn btn-brown w-full py-3 text-base"
                        >
                            {form.processing ? 'Saving...' : 'Create product'}
                        </button>
                    </form>
                )}
            </div>
        </>
    );
}
