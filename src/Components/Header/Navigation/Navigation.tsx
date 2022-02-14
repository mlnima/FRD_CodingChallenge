import {FC} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationStyledNav = styled.nav`
 .navigation-item{
   text-decoration: none;
   color: var(--navigation-text-color,#000);
   padding: 6px 12px;
 }
`
const Navigation: FC = () => {
    return (
        <NavigationStyledNav>
            <Link to={'/vehicleManufacturers'} className={'navigation-item'}>Vehicle Manufacturers</Link>
        </NavigationStyledNav>
    )
};
export default Navigation
