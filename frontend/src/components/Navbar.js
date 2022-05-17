import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { 
  HouseFill,
  Cart4,
  PeopleFill,
  FileText,
  BoxArrowInRight,
  BoxArrowLeft,
  PersonPlusFill,
  Basket,
  Gear
} from "react-bootstrap-icons";
import './styles/Navbar.css'

export default function NavigationBar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()
  const isAdmin = user && user.role !== 'admin'

  const _logout = () => {
    dispatch(logout())
  }

  return (
    <div id="menu">
      <ul className="links">
        <h1>Sidebar Menu</h1>
        <hr />
        <ul className="public-links">
          <Link to="/"><li><HouseFill /> Anasayfa</li></Link>
          <Link to="products"><li><Cart4 /> Ürünler</li></Link>
        </ul>
      </ul>

      { isAdmin && <ul className="admin-links">
        <Link to="users"><li><PeopleFill /> Kullanıcılar</li></Link>
        <Link to="products/add"><li><FileText /> Ürün Takibi</li></Link>
        <Link to="settings"><li><Gear /> Ayarlar (Admin)</li></Link>
      </ul> }

      <ul className="auth-handlers links">
        { user ? 
          <div className="auth-links">
            <Link to="my-basket"><li><Basket /> Sepetim</li></Link>
            <li onClick={_logout}><BoxArrowLeft /> Çıkış</li>
          </div>
          :
          <div className="auth-links">
            <Link to="sign-in"><li><BoxArrowInRight /> Giriş Yap</li></Link>
            <Link to="sign-up"><li><PersonPlusFill /> Kayıt Ol</li></Link>
          </div> }
      </ul>
    </div>
  );
}
