import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonStyle } from "../Button/Button.steled";

export const ButtonLogin = styled(ButtonStyle)`
  &:hover {
    border: 1px solid rgba(25, 26, 21, 0.1);
    color: rgba(25, 26, 21, 0.3);
  }
`;

export const ButtonRegister = styled(ButtonStyle)`
  color: var(--main-text-batton-color);
  border-color: var(--main-batton-color);
  background-color: var(--main-batton-color);

  &:hover {
    border-color: var(--main-batton-hover-color);
    background-color: var(--main-batton-hover-color);
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: var(--main-text-color);
`;
export const LogoSpan = styled.span`
  font-weight: 600;
  color: var(--main-logo-color);
`;

export const LayautHeader = styled.div`
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: var(--main-text-color);
  margin-left: 40px;

  &:hover {
  }
`;

export const Button = styled.span`
  font-weight: 600;

  color: var( --main-logo-colord);
`;
export const NavLinkWraper = styled.div`
  margin-left: 130px;
`;

export const AuthBatton = styled.div`
display: flex;
gap:8px


`;
