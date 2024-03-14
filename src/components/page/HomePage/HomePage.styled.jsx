import styled from "styled-components"
import { ButtonStyle } from "../../Button/Button.steled"
export const CardWraper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Title = styled.h1`

font-weight: 600;
font-size: 80px;
line-height: 102%;
letter-spacing: -0.02em;
color: #191a15;
width: 595px;
`
export const ImgHome = styled.img`
width: 465px;
height: 526px;
margin-left: 125px;
margin-top: 50px;
border-radius: 30px;
`
export const TitleParagraf = styled.p`
width: 450px;

`

export const ButtonStarted = styled(ButtonStyle)`
  color: var(--main-text-batton-color);
  border-color: var(--main-batton-color);
  background-color: var(--main-batton-color);
  display: flex;
  gap:9px;
  font-size: 20px;



  &:hover {
    border-color: var(--main-batton-hover-color);
    background-color: var(--main-batton-hover-color);
  }
`;
