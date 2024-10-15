
import useAuth from "../hooks/useAuth"
import CartPage from "../cart/CartPage";
import AdminLayout from "../admin-panel/Layout";

const AdminRoute = () => {

  const user = useAuth();

  return user?.isAdmin ? <AdminLayout /> : <CartPage />
}
export default AdminRoute


