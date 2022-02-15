import {FC} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePageStyledDiv = styled.div`
  background-color: #FFE24F;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 20px;
  
  h1{
    color: #7E57C2;
  }
  .hero-image-content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .find-link{
      text-decoration: none;
    }
  }
  .hero-image-element{
display: none;
  }
  @media only screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr;
    .hero-image-element{
      display: initial;
      width: 570px;
      height: 570px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
`

const HomePage: FC = () => {
    return (
        <HomePageStyledDiv>
             <div className={'hero-image-content'}>
                 <h1>Find your green car</h1>
                 <Link to={'/vehicleManufacturers'}
                       className={'btn btn-secondary find-link'}
                       title={'find your green car'}
                 >
                     Lets Start
                 </Link>

             </div>
            <div className={'hero-image-element'}>
                <img src={'/images/home-hero-image.jpg'} alt={'hero-image'}/>
            </div>
        </HomePageStyledDiv>
    )
};
export default HomePage
