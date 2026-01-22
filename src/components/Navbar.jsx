import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

const Navbar = () => {
    const { pathname } = useLocation();
    const { cartItems } = useContext(CartContext);
    const { wishlistItems } = useContext(WishlistContext);

    const isHome = pathname === '/';

    return (
        <nav className={`w-full z-50 transition-all duration-300 ${isHome ? 'bg-[#9538E2] text-white mt-6 mx-auto w-[95%] rounded-t-3xl' : 'bg-white text-black sticky top-0'}`}>
            <div className="navbar container mx-auto px-4 md:px-12 py-4 flex justify-between items-center">
                <div className="navbar-start">
                    <Link to="/" className="text-xl font-bold">Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu flex px-1 gap-8 font-medium">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "underline underline-offset-4 font-bold" : "hover:underline"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics" className={({ isActive }) => isActive ? "text-primary font-bold" : (isHome ? "hover:text-gray-200" : "hover:text-primary")}>Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-primary font-bold" : (isHome ? "hover:text-gray-200" : "hover:text-primary")}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary font-bold" : (isHome ? "hover:text-gray-200" : "hover:text-primary")}>About</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <Link to="/dashboard/cart" className="relative p-2 rounded-full border bg-white border-gray-200 text-black hover:bg-gray-100 transition">
                        <IoCartOutline size={20} />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>
                    <Link to="/dashboard/wishlist" className="relative p-2 rounded-full border bg-white border-gray-200 text-black hover:bg-gray-100 transition">
                        <IoHeartOutline size={20} />
                        {wishlistItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {wishlistItems.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
            {/* Mobile Menu (Optional but good for responsiveness) */}
        </nav>
    );
};

export default Navbar;
