import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const WishContext = createContext();

export function WishProvider({ children }) {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWish = (item) => {
    if (wishlist.find((w) => w.product_id === item.product_id)) {
      toast.error("Already in wishlist");
      return;
    }
    setWishlist([...wishlist, item]);
    toast.success("Added to wishlist ❤️");
  };

  const removeFromWish = (id) => {
    setWishlist(wishlist.filter((i) => i.product_id !== id));
  };

  return (
    <WishContext.Provider value={{ wishlist, addToWish, removeFromWish }}>
      {children}
    </WishContext.Provider>
  );
}
