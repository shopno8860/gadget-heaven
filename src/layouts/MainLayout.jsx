import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="min-h-[calc(100vh-288px)]">
             {/* 288px is approx footer + navbar height, ensuring footer sticks or content expands */}
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
