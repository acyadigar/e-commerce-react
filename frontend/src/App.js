import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import ProtectedRoute from "./middlewares/ProtectedRoutes";
import NotAllowed from "./pages/NotAllowed";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMe } from "./store/authSlice";

export default function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchMe({ token }));
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="products" element={<Products />} />
          </Route>
          <Route element={<ProtectedRoute admin={true} />}>
            <Route path="products/add" element={<CreateProduct />} />
            <Route path="products/:id/edit" element={<EditProduct />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="not-allowed" element={<NotAllowed />} />
        </Routes>
      </div>
    </div>
  );
}
