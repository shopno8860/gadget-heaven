const Footer = () => {
    return (
        <footer className="bg-white p-10 text-center mt-20">
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Gadget Heaven</h2>
                <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="border-t border-gray-200 w-full mb-8"></div>
            <div className="footer flex flex-col md:flex-row justify-evenly text-left gap-10 md:gap-0">
                <nav className="flex flex-col gap-2 items-center md:items-start">
                    <h6 className="footer-title font-bold text-black mb-2">Services</h6>
                    <a className="link link-hover text-gray-500 hover:text-primary">Product Support</a>
                    <a className="link link-hover text-gray-500 hover:text-primary">Order Tracking</a>
                    <a className="link link-hover text-gray-500 hover:text-primary">Shipping & Delivery</a>
                    <a className="link link-hover text-gray-500 hover:text-primary">Returns</a>
                </nav>
                <nav className="flex flex-col gap-2 items-center md:items-start">
                    <h6 className="footer-title font-bold text-black mb-2">Company</h6>
                    <a className="link link-hover text-gray-500 hover:text-primary">About Us</a>
                    <a className="link link-hover text-gray-500 hover:text-primary">Careers</a>
                    <a className="link link-hover text-gray-500 hover:text-primary">Contact</a>
                </nav>
                <nav className="flex flex-col gap-2 items-center md:items-start">
                    <h6 className="footer-title font-bold text-black mb-2">Legal</h6>
                    <a className="link link-hover text-gray-500 hover:text-primary">Terms of Service</a>
                    <a className="link link-hover text-gray-500 hover:text-primary">Privacy Policy</a>
                    <a className="link link-hover text-gray-500 hover:text-primary">Cookie Policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
