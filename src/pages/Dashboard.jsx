import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { IoCloseCircleOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import groupImg from '../assets/Group.png'; // Fixed import case

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Cart');
    const { cartItems, removeFromCart, clearCart, totalPrice } = useContext(CartContext);
    const { wishlistItems, removeFromWishlist, addToWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);
    
    // Local sort state for cart
    const [isSorted, setIsSorted] = useState(false);
    // Local sort state for wishlist
    const [isWishlistSorted, setIsWishlistSorted] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (location.pathname === '/dashboard/wishlist') {
            setActiveTab('Wishlist');
        } else {
            setActiveTab('Cart');
        }
    }, [location.pathname]);

    const displayedCartItems = isSorted 
        ? [...cartItems].sort((a, b) => a.price - b.price) 
        : cartItems;

    const displayedWishlistItems = isWishlistSorted
        ? [...wishlistItems].sort((a, b) => a.price - b.price)
        : wishlistItems;

    const handleSort = () => {
        setIsSorted(!isSorted);
    };

    const handleWishlistSort = () => {
        setIsWishlistSorted(!isWishlistSorted);
    };

    const handlePurchase = () => {
        if (cartItems.length === 0) return;
        setShowModal(true);
    };

    const confirmPurchase = () => {
        const cost = totalPrice;
        clearCart();
        setShowModal(false);
        navigate('/');
    };

    const handleAddToCartFromWishlist = (product) => {
        addToCart(product);
    };

    useEffect(() => {
        document.title = "Dashboard | Gadget Heaven";
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
             <div className="bg-[#9538E2] text-white text-center py-8 mb-8">
                <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                <p className="max-w-2xl mx-auto mb-8 px-4">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="flex justify-center gap-4">
                    <button 
                        onClick={() => navigate('/dashboard/cart')}
                        className={`px-8 py-2 rounded-full font-bold border ${activeTab === 'Cart' ? 'bg-white text-[#9538E2] border-white' : 'bg-transparent text-white border-white'}`}
                    >
                        Cart
                    </button>
                    <button 
                        onClick={() => navigate('/dashboard/wishlist')}
                        className={`px-8 py-2 rounded-full font-bold border ${activeTab === 'Wishlist' ? 'bg-white text-[#9538E2] border-white' : 'bg-transparent text-white border-white'}`}
                    >
                        Wishlist
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12 pb-20">
                {activeTab === 'Cart' ? (
                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                             <h3 className="text-2xl font-bold">Cart</h3>
                             <div className="flex items-center gap-4">
                                 <h4 className="font-bold text-xl">Total cost: ${totalPrice.toFixed(2)}</h4>
                                 <button 
                                    onClick={handleSort}
                                    className="btn-outline px-6 py-2 rounded-full flex items-center gap-2 text-[#9538E2] border-[#9538E2] hover:bg-[#9538E2] hover:text-white"
                                 >
                                    Sort by Price <span className="text-xl">⇅</span>
                                 </button>
                                 <button 
                                    onClick={handlePurchase}
                                    disabled={cartItems.length === 0}
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                 >
                                    Purchase
                                 </button>
                             </div>
                        </div>

                        <div className="space-y-4">
                            {displayedCartItems.map((item, index) => (
                                <div key={`${item.product_id}-${index}`} className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-24 h-24 bg-gray-100 rounded-lg p-2">
                                            <img src={item.product_image} alt={item.product_title} className="w-full h-full object-contain"/>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">{item.product_title}</h4>
                                            <p className="text-gray-500">{item.description}</p>
                                            <p className="font-bold text-gray-700 mt-2">Price: $ {item.price}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => removeFromCart(item.product_id)} className="text-red-500 mr-4">
                                        <IoCloseCircleOutline size={30} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold">Wishlist</h3>
                            <button 
                                onClick={handleWishlistSort}
                                className="btn-outline px-6 py-2 rounded-full flex items-center gap-2 text-[#9538E2] border-[#9538E2] hover:bg-[#9538E2] hover:text-white"
                            >
                                Sort by Price <span className="text-xl">⇅</span>
                            </button>
                        </div>
                        <div className="space-y-4">
                             {displayedWishlistItems.map((item) => (
                                <div key={item.product_id} className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-24 h-24 bg-gray-100 rounded-lg p-2">
                                            <img src={item.product_image} alt={item.product_title} className="w-full h-full object-contain"/>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">{item.product_title}</h4>
                                            <p className="text-gray-500 mb-2">Price: $ {item.price}</p>
                                            <button 
                                                onClick={() => handleAddToCartFromWishlist(item)}
                                                className="bg-[#9538E2] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition"
                                            >
                                                Add to Card
                                            </button>
                                        </div>
                                    </div>
                                    <button onClick={() => removeFromWishlist(item.product_id)} className="text-red-500">
                                        <IoCloseCircleOutline size={30} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-2xl text-center max-w-sm w-full mx-4">
                         <div className="flex justify-center mb-4">
                             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                 <span className="text-4xl">✓</span>
                             </div>
                         </div>
                        <h3 className="text-2xl font-bold mb-2">Payment Successfully</h3>
                        <div className="divider my-2"></div>
                        <p className="text-gray-500 mb-2">Thanks for purchasing.</p>
                        <p className="font-bold mb-6">Total: ${totalPrice.toFixed(2)}</p>
                        <button onClick={confirmPurchase} className="w-full bg-gray-200 py-2 rounded-full font-bold hover:bg-gray-300">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
