import React from "react";
import {Link} from "react-router-dom";

interface VehicleManufacturerCardPropTypes {
    vehicleModel: string,
    vehicleManufacturerName?: string,
}

const VehicleModelCardCard :React.FC<VehicleManufacturerCardPropTypes> =
    ({
         vehicleModel,
         vehicleManufacturerName
    }) => {

    return (
        <article className={'article-card'}>
            <Link to={`/vehicleManufacturer/${vehicleManufacturerName}/${vehicleModel}`} className={'card-link'}>
                <img className={'card-thumbnail'} src={'/images/vehicleModels.jpg'} alt={`${vehicleManufacturerName}`}/>
                <h3 className={'card-title'}>{vehicleModel}</h3>
            </Link>
        </article>
    )
};
export default VehicleModelCardCard
