export type ProductCardProps = {
    product: {
        id: number;
        name: string;
        category: string;
        price: number;
        price_string: string;
        image_url: string;
    };
};

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="product-card transition-all duration-400 ease-in-out hover:translate-y-[-2px] hover:shadow-sm hover:shadow-black/5">
            <img
                src={product.image_url}
                alt={product.name}
                className="product-img"
            />
            <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price_string}</p>
            </div>
        </div>
    );
}
