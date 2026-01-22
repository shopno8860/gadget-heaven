export default function CategorySidebar({ setCategory }) {
  const categories = [
    "All",
    "Computers",
    "Phones",
    "Smart Watches",
    "Chargers",
    "Power Banks"
  ];

  return (
    <aside className="col-span-12 md:col-span-3 bg-white p-4 rounded-lg shadow">
      <h2 className="font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => setCategory(cat)}
            className="cursor-pointer hover:text-purple-600"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}
