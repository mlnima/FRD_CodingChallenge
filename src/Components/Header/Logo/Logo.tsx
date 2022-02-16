import React from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

const LogoStyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 10px;
   
  .logo-image {
    width: 110px;
  }
  
  .head-line{
    margin: 3px 0;
    color: var(--main-text-color);
  }
`

const Logo :React.FC  = () => {
    return (
        <LogoStyledLink to={'/'} title={'friday'}>
            <img className={'logo-image'} src={'/images/logo.png'}
                 alt={'logo'}
            />
        </LogoStyledLink>
    )
};
export default Logo

