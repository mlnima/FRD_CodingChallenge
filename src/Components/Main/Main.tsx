import React, {FC} from "react";
import { Routes, Route } from "react-router-dom";
import VehicleManufacturersPage from "./Pages/VehicleManufacturersPage/VehicleManufacturersPage";
import VehicleManufacturerPage from "./Pages/VehicleManufacturerPage/VehicleManufacturerPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import VehicleModelPage from "./Pages/VehicleModelPage/VehicleModelPage";
import styled from "styled-components";
import HomePage from "./Pages/HomePage/HomePage";

const PagesStyledMain = styled.main`
  margin: auto;
  max-width: 1300px;
`

const Main : FC = () => {

    return (
        <PagesStyledMain>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/vehicleManufacturers" element={<VehicleManufacturersPage />} />
                <Route path="/vehicleManufacturer/:vehicleManufacturerName" element={<VehicleManufacturerPage />} />
                <Route path="/vehicleManufacturer/:vehicleManufacturerName/:carModel" element={<VehicleModelPage />} />
                <Route path="" element={<NotFoundPage />} />
            </Routes>
        </PagesStyledMain>
    )

};

export default Main
