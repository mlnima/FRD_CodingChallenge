import {FC} from "react";
import styled from "styled-components";
import {VehicleTypes} from "../../../../../typeScriptTypes/storeTypes";

const VehicleCardStyledArticle = styled.article`
  border: 1px solid black;
  border-radius: 3px;
  width: 320px;
  padding: 10px;
  margin: 10px;
  .vehicle-detail{
    .vehicle-detail-section{
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      span,p{
        margin: 3px;
      }
    }
  }
`

interface VehicleCardPropTypes {
    Vehicle:VehicleTypes
}

const VehicleCard: FC<VehicleCardPropTypes> = ({Vehicle}) => {
    return (
        <VehicleCardStyledArticle>
            <img src={'/images/defaultCarImage.jpg'} alt={`${Vehicle.make}-${Vehicle.model}`}/>
            <div className='vehicle-detail'>
                <div className='vehicle-detail-section'>
                    <span>Manufacturer :</span>
                    <p>{Vehicle.make}</p>
                </div>
                <div className='vehicle-detail-section'>
                    <span>Model :</span>
                    <p>{Vehicle.model}</p>
                </div>
                <div className='vehicle-detail-section'>
                    <span>PS :</span>
                    <p>{Vehicle.enginePowerPS}</p>
                </div>
                <div className='vehicle-detail-section'>
                    <span>FuelType:</span>
                    <p>{Vehicle.fuelType}</p>
                </div>
                <div className='vehicle-detail-section'>
                    <span>Body Type:</span>
                    <p>{Vehicle.bodyType}</p>
                </div>
                <div className='vehicle-detail-section'>
                    <span>Engine Capacity :</span>
                    <p>{Vehicle.engineCapacity}</p>
                </div>
            </div>

        </VehicleCardStyledArticle>
    )
};

export default VehicleCard
