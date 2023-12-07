import { NavLink, Outlet } from "react-router-dom";
import { GlobalStyled } from "globalStyled";

import styled from "styled-components";

const StyledWrapp = styled.ul`
display: flex;
padding-left: 20px;
padding-top: 20px;
`;

const List = styled.li`
  margin-right: 30px;
  font-size: 28px;
  font-weight: 700;
  line-height: 0.9;
  color: #121417;
`;

const LList = styled.li`
  font-size: 28px;
  font-weight: 700;
  line-height: 0.9;
  color: #121417;
`;

const Layout = () => {
    return (
      <div>
        <nav>
          <StyledWrapp>
            <List>
              <NavLink to="/">Home</NavLink>
            </List>
            <List>
              <NavLink to="/catalog">Catalog</NavLink>
            </List>
            <LList>
              <NavLink to="/favorites">Favorits</NavLink>
            </LList>
          </StyledWrapp>
        </nav>
        <GlobalStyled />
        <Outlet/>
      </div>
    );
}

export default Layout;