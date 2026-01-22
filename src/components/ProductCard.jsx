import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="card bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-4 border border-gray-100">
            <figure className="h-48 overflow-hidden rounded-xl bg-gray-50 mb-4">
                <img src={product.product_image} alt={product.product_title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
            </figure>
            <div className="card-body p-0">
                <h2 className="text-xl font-bold mb-2">{product.product_title}</h2>
                <p className="text-gray-500 font-medium mb-4">Price: ${product.price}</p>
                <div className="card-actions">
                    <Link to={`/product/${product.product_id}`} className="btn-outline inline-block text-center text-sm px-4 py-2 hover:no-underline">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
