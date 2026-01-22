import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="stats" element={<Statistics />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
