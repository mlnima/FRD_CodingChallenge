import _filterVehicles from '../_filterVehicles'

const mockVehiclesData = [
    {
        enginePowerPS: 10,
        engineCapacity: 20,
        enginePowerKW: 2300,
        bodyType: 'lemo',
        fuelType: 'benzin'
    },
    {
        enginePowerPS: 40,
        engineCapacity: 60,
        enginePowerKW: 200,
        bodyType: 'sport',
        fuelType: 'gas'
    },
]

const mockFilterData = {
    enginePowerPS: '10',
    engineCapacity: 0,
    enginePowerKW: 0,
    bodyType: '',
    fuelType: ''
}

describe('_filterVehicles', () => {
    test('convert variable name to split string name', () => {
        expect(_filterVehicles(mockVehiclesData, mockFilterData)).toEqual(expect.arrayContaining([{
                enginePowerPS: 10,
                engineCapacity: 20,
                enginePowerKW: 2300,
                bodyType: 'lemo',
                fuelType: 'benzin'
            }]
        ));
    });
});