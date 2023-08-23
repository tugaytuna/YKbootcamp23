import { Outlet, Link } from "react-router-dom";
import "./style.css";

const Layout = () => {
  return (
    <>
      <h1 className="baslik">Tugay Tuna</h1>
      <nav>
        <ul>
          <li>
            <a href="">
              {" "}
              <Link to="/">Anasayfa</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/blogs">Eğitimler</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/contact">İletişim</Link>
            </a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
