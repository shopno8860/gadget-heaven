import { Link } from "react-router-dom";

export default function GadgetCard({ item }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <img
        src={item.product_image}
        alt={item.product_title}
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="mt-4 font-semibold">{item.product_title}</h3>
      <p className="text-purple-600 font-bold">${item.price}</p>

      <Link
        to={`/details/${item.product_id}`}
        className="inline-block mt-3 text-sm bg-purple-600 text-white px-4 py-2 rounded"
      >
        Details
      </Link>
    </div>
  );
}
