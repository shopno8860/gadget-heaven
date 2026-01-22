import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = "About | Gadget Heaven";
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-[#9538E2] text-white text-center py-8 mb-8">
                <h2 className="text-3xl font-bold mb-4">About Gadget Heaven</h2>
                <p className="max-w-2xl mx-auto px-4">
                    Your one-stop destination for the latest and greatest tech gadgets
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-12 pb-20">
                <div className="bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-[#9538E2]">Our Story</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Welcome to Gadget Heaven, where technology meets innovation. We are passionate about bringing you the latest and most exciting gadgets that enhance your digital lifestyle. From cutting-edge laptops to immersive VR headsets, we curate only the best products for tech enthusiasts like you.
                    </p>

                    <h3 className="text-2xl font-bold mb-6 text-[#9538E2]">What We Offer</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-bold text-lg mb-2">Premium Products</h4>
                            <p className="text-gray-600">
                                Carefully selected gadgets from top brands, ensuring quality and performance.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-bold text-lg mb-2">Best Prices</h4>
                            <p className="text-gray-600">
                                Competitive pricing with a $1000 cart limit to help you manage your budget.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-bold text-lg mb-2">Wide Selection</h4>
                            <p className="text-gray-600">
                                From laptops and phones to smartwatches and accessories - we have it all.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-bold text-lg mb-2">Easy Shopping</h4>
                            <p className="text-gray-600">
                                User-friendly interface with cart and wishlist features for seamless shopping.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-6 text-[#9538E2]">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to make cutting-edge technology accessible to everyone. We believe that the right gadget can transform your daily life, boost your productivity, and bring joy to your digital experiences. That's why we're committed to providing exceptional products, competitive prices, and outstanding customer service.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
