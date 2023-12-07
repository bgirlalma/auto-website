import { NavLink, Outlet } from "react-router-dom";
import { GlobalStyled } from "globalStyled";

const Layout = () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorits</NavLink>
            </li>
          </ul>
        </nav>
        <GlobalStyled />
        <Outlet/>
      </div>
    );
}

export default Layout;