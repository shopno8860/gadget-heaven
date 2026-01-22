import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4 py-20">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-gray-500">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn-primary mt-4 inline-block">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
