const countries = [
    { name: 'India', states: ['Karnataka', 'Maharashtra', 'Goa'] },
    { name: 'USA', states: ['California', 'NewYork',] },
];

const cities = {
    Karnataka: ['Bangalore', 'Mysore', 'Hubli'],
    Maharashtra: ['Mumbai', 'Pune'],
    Goa: ['Panjim'],

    California: ['LosAngeles', 'SanFrancisco'],
    NewYork: ['NewYorkCity', 'Albany'],
};
const famousPlaces = {
    Bangalore: ['CubbonPark', 'LalbaghBotanicalGarden', 'VidhanaSoudha'],
    Mysore: [' Park', 'LalbaghBotanical ', ' Soudha'],
    Hubli: ['Cubbon ', 'Lalbagh Garden', 'Vidhana '],
    Pune: ['Gateway ', ' Drive', 'Siddhivinayak '],
    Mumbai: ['GatewayofIndia', 'MarineDrive', 'SiddhivinayakTemple'],
    Panjim: ['DonaPaula', 'MarineBeach', 'MahalashaTemple'],

    LosAngeles: ['HollywoodWalkofFame', 'UniversalStudiosHollywood', 'GriffithObservatory'],
    SanFrancisco: [' WalkofFame', ' StudiosHollywood', ' Observatory'],

    Albany: ['Griffith', 'Observatory'],
    NewYorkCity: ['Houston', 'Austin', 'Dallas'],
};

export { countries, cities, famousPlaces };