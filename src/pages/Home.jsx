import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All Product');

    useEffect(() => {
        document.title = "Gadget Heaven | Home";
        // Fetch data
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
                
                // Extract unique categories
                const uniqueCategories = ['All Product', ...new Set(data.map(item => item.category))];
                setCategories(uniqueCategories);
            });
    }, []);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        if (category === 'All Product') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div>
            <Banner />
            
            <div className="container mx-auto px-4 md:px-12 mb-20">
                <h2 className="text-3xl font-bold text-center mb-10">Explore Cutting-Edge Gadgets</h2>
                
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar */}
                    <div className="w-full md:w-1/4">
                        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryClick(category)}
                                    className={`text-left px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                                        activeCategory === category 
                                        ? 'bg-[#9538E2] text-white' 
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Product Grid */}
                    <div className="w-full md:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.product_id} product={product} />
                            ))}
                        </div>
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20 text-gray-500">
                                <p className="text-xl">No products found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
