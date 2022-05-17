import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({admin}) {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.auth.loading);

  if (loading) return <h1>Loading...</h1>

  if (admin && token && user && user.role !== 'admin') {
    return <Navigate replace to='/not-allowed' />
  }

  if (!user) return <Navigate replace to='/sign-up' />
  
  return <Outlet />
}

export default ProtectedRoute;
