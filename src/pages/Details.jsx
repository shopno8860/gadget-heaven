import { useParams } from "react-router-dom";
import gadgets from "../../public/data/gadgets.json";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishContext } from "../context/WishContext";

export default function Details() {
  const { id } = useParams();
  const item = gadgets.find((g) => g.product_id === id);

  const { addToCart } = useContext(CartContext);
  const { addToWish, wishlist } = useContext(WishContext);

  const wished = wishlist.find((w) => w.product_id === id);

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      <img src={item.product_image} className="rounded-lg" />
      <div>
        <h1 className="text-3xl font-bold">{item.product_title}</h1>
        <p className="text-purple-600 text-xl">${item.price}</p>

        <button
          onClick={() => addToCart(item)}
          className="bg-purple-600 text-white px-6 py-2 mt-4 rounded"
        >
          🛒 Add to Cart
        </button>

        <button
          disabled={wished}
          onClick={() => addToWish(item)}
          className={`ml-4 px-4 py-2 rounded text-white ${
            wished ? "bg-gray-400" : "bg-red-500"
          }`}
        >
          ♥
        </button>
      </div>
    </div>
  );
}
