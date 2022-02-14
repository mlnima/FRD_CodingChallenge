import React from "react";
import {Link} from "react-router-dom";

interface VehicleManufacturerCardPropTypes {
    VehicleManufacturer: string
}

const VehicleManufacturerCard :React.FC<VehicleManufacturerCardPropTypes> = ({VehicleManufacturer}) => {

    return (
        <article className={'article-card'}>
            <Link to={`/vehicleManufacturer/${VehicleManufacturer}`}
                  className={'card-link'}
                  title={'VehicleManufacturer'}
            >
                <img className={'card-thumbnail'}
                     src={'/images/vehicleManufacturer.jpg'}
                     alt={`${VehicleManufacturer}`}
                />
                <h3 className={'card-title'}>{VehicleManufacturer}</h3>
            </Link>
        </article>
    )
};
export default VehicleManufacturerCard
