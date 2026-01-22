import { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    if (totalPrice + product.price > 1000) {
      toast.error('Cannot add item. Total price exceeds $1000 limit!');
      return;
    }
    
    // Check if item works with quantity or just simple list. 
    // Requirement says "Show cart items". Usually simple list is enough for this scope.
    // However, unique ID is needed for removing specific instances if we allow duplicates.
    // If we don't allow duplicates, it's easier. 
    // User didn't say "prevent duplicate in cart", only in wishlist. 
    // But let's assume we can add multiple items as long as price < 1000.
    
    const newCart = [...cartItems, product];
    setCartItems(newCart);
    toast.success(`${product.product_title} added to cart!`);
  };

  const removeFromCart = (product_id) => {
    // Remove only one instance if there are duplicates? 
    // Or remove based on a unique index? 
    // Since product_id is the only ID we have, and we might have duplicates (if we allowed them),
    // removing by filter(id !== id) would remove ALL instances.
    // Better to remove by index or ensure uniqueness.
    // Given the strict $1000 limit and high prices (laptops ~999),
    // it's unlikely user will add multiple of same big item.
    // Let's simpler approach: Remove by filtering out the specific item (all instances) 
    // OR findIndex and splice. findIndex is safer for "remove one instance".
    
    const index = cartItems.findIndex(item => item.product_id === product_id);
    if (index !== -1) {
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      setCartItems(newCart);
      toast.error('Item removed from cart.');
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
