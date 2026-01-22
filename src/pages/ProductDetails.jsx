import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IoCartOutline, IoHeartOutline, IoHeart } from "react-icons/io5";
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

const ProductDetails = () => {
    const { product_id } = useParams();
    const [product, setProduct] = useState(null);
    const [isInWishlist, setIsInWishlist] = useState(false);
    
    // Contexts
    const { addToCart } = useContext(CartContext);
    const { addToWishlist, wishlistItems } = useContext(WishlistContext);

    useEffect(() => {
        document.title = product ? `${product.product_title} | Gadget Heaven` : "Product Details | Gadget Heaven";
    }, [product]);

    useEffect(() => {
        // Fetch data and find product
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(p => p.product_id === product_id);
                setProduct(found);
            });
    }, [product_id]);

    useEffect(() => {
        if (product) {
            const exists = wishlistItems.some(item => item.product_id === product.product_id);
            setIsInWishlist(exists);
        }
    }, [product, wishlistItems]);

    const handleWishlistClick = () => {
        if (!isInWishlist) {
            addToWishlist(product);
        }
    };

    if (!product) return <div className="text-center py-20">Loading...</div>;

    // Rating stars generator
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 !== 0; // Simple integer check for now
        // For simplicity, just rendering 5 stars logic or simple text
        // User asked for "Rating" in data, let's just show stars
        const stars = [];
        for (let i = 0; i < 5; i++) {
             if (i < fullStars) stars.push(<span key={i} className="text-yellow-400">★</span>);
             else stars.push(<span key={i} className="text-gray-300">★</span>);
        }
        return stars;
    };

    return (
        <div className="bg-gray-100 min-h-[calc(100vh-100px)] pb-20 relative">
             {/* Header Extension */}
            <div className="bg-[#9538E2] h-60 text-white text-center pt-8 pb-32">
                <h2 className="text-3xl font-bold mb-4">Product Details</h2>
                <p className="max-w-2xl mx-auto px-4">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            {/* Product Card Overlay */}
            <div className="container mx-auto px-4 -mt-40">
                <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
                    {/* Image */}
                    <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl flex items-center justify-center p-4">
                         <img src={product.product_image} alt={product.product_title} className="max-h-[400px] object-contain" />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-3xl font-bold text-gray-800">{product.product_title}</h3>
                        <p className="text-xl font-semibold text-gray-600">Price: $ {product.price}</p>
                        
                        <div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${product.availability ? 'bg-green-100 text-green-600 border-green-300' : 'bg-red-100 text-red-600 border-red-300'}`}>
                                {product.availability ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>

                        <p className="text-gray-500">{product.description}</p>
                        
                        <div>
                            <h4 className="font-bold mb-2">Specification:</h4>
                            <ul className="list-decimal list-inside text-gray-500 space-y-1">
                                {product.Specification && product.Specification.map((spec, idx) => (
                                    <li key={idx}>{spec}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-1">Rating ⭐</h4>
                            <div className="flex items-center gap-2">
                                <div className="text-lg">{renderStars(product.rating)}</div>
                                <div className="badge badge-ghost text-xs bg-gray-100 border-none p-2">{product.rating}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                            <button 
                                onClick={() => addToCart(product)}
                                className="btn-primary flex items-center gap-2 hover:scale-105 transform active:scale-95"
                            >
                                Add To Card <IoCartOutline size={20}/>
                            </button>
                            
                            <button 
                                onClick={handleWishlistClick}
                                disabled={isInWishlist}
                                className={`p-3 rounded-full border border-gray-200 transition ${isInWishlist ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-100 text-black'}`}
                            >
                                {isInWishlist ? <IoHeart size={20}/> : <IoHeartOutline size={20}/> }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
