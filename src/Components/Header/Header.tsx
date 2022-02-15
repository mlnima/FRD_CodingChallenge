import React from "react";
import Logo from "./Logo/Logo";
import styled from "styled-components";
import Navigation from "./Navigation/Navigation";

const HeaderStyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px ;
  height: 68px;
  background-color: var( --header-background-color,#ccc);
  width: 100%;
`

const Header :React.FC = () => {
    return (
        <HeaderStyledHeader id={'header'} className={'header'}>
            <Logo/>
            <Navigation/>
        </HeaderStyledHeader>
    )
};
export default Header
