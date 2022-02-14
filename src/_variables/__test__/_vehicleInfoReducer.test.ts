import _vehicleInfoReducer from '../_vehicleInfoReducer';

const mockVehicleInfoReducerData = [
    {
        "enginePowerPS": 68,
        "enginePowerKW": 50,
        "fuelType": "Diesel",
        "bodyType": "Limousine",
        "engineCapacity": 2000
    },
    {
        "enginePowerPS": 10,
        "enginePowerKW": 60,
        "fuelType": "Diesel",
        "bodyType": "Limousine",
        "engineCapacity": 1399
    },
    {
        "enginePowerPS": 400,
        "enginePowerKW": 70,
        "fuelType": "benzin",
        "bodyType": "Convertible",
        "engineCapacity": 4000
    }
]

describe('_vehicleInfoReducer', () => {
    test('reduce vehicle data to get filters options', () => {
        expect(_vehicleInfoReducer(mockVehicleInfoReducerData)).toEqual(expect.objectContaining(
            {
                enginePowerPS: expect.arrayContaining([68, 10, 400]),
                engineCapacity: expect.arrayContaining([2000, 1399, 4000]),
                enginePowerKW: expect.arrayContaining([50, 60, 70]),
                bodyType: expect.arrayContaining(['Limousine', 'Convertible']),
                fuelType: expect.arrayContaining(['benzin', 'Diesel']),
            }
        ));
    });
});