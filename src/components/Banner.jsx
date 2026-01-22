import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="relative mb-80"> 
            {/* Background container */}
            <div className="bg-[#9538E2] text-white rounded-b-3xl pt-10 pb-48 md:pb-64 px-4 text-center mx-auto w-[95%]">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Upgrade Your Tech Accessorize with <br className="hidden md:block"/> Gadget Heaven Accessories
                </h1>
                <p className="max-w-2xl mx-auto mb-8 text-gray-200">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <Link to="/dashboard" className="bg-white text-[#9538E2] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                    Shop Now
                </Link>
            </div>

            {/* Floating Image Container */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-64 w-[90%] md:w-[70%] lg:w-[60%] border-2 border-white/30 bg-white/30 backdrop-blur-md rounded-3xl p-4 shadow-xl">
                 <div className="w-full h-[300px] md:h-[400px] bg-cover bg-center rounded-2xl overflow-hidden">
                      <img src={bannerImg} alt="Gadget Banner" className="w-full h-full object-cover"/>
                 </div>
            </div>
        </div>
    );
};

export default Banner;
