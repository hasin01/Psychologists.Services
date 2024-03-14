import {  Outlet,  } from "react-router-dom"

import { Container } from "../Container/Container.styled";
import {  AuthBatton,  ButtonLogin,  ButtonRegister,  LayautHeader, Logo, LogoSpan, NavLink, NavLinkWraper } from "./Leyaut..styled";
function Layout() {


  return (
  <>
    <Container style={{ outline: "1px solid rgba(25, 26, 21, 0.1)" }}>
      <LayautHeader>
        <Logo>
          <LogoSpan>psychologists.</LogoSpan>services
        </Logo>
        <NavLinkWraper>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Psychologists">Psychologists</NavLink>
          {<NavLink to="/Favorites">Favorites</NavLink>}
        </NavLinkWraper>

        <AuthBatton>
        <ButtonLogin>Log In</ButtonLogin>
        <ButtonRegister>Registration</ButtonRegister>
        </AuthBatton>
      </LayautHeader>
    </Container>
    <Container>
      <Outlet />
    </Container>
  </>
);

}

export default Layout;

