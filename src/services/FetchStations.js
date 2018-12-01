export const getStations = () => {
    const URL = `https://api.voltaapi.com/v1/stations`;
    return fetch(URL)
            .then((res) => {return res.json();});
}
