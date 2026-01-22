import { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    const exists = wishlistItems.some(item => item.product_id === product.product_id);
    if (exists) {
      toast.error('Item already in wishlist!');
      return;
    }
    setWishlistItems([...wishlistItems, product]);
    toast.success(`${product.product_title} added to wishlist!`);
  };

  const removeFromWishlist = (product_id) => {
    const newWishlist = wishlistItems.filter(item => item.product_id !== product_id);
    setWishlistItems(newWishlist);
    toast.error('Item removed from wishlist.');
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
