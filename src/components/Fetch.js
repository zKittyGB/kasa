
//Function to collect data
const Fetch =  () => {
    return fetch('http://localhost:3000/locations.json').then((response) => response.json());
};

export default Fetch