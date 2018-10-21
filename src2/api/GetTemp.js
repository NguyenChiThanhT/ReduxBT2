const URL = "http://api.openweathermap.org/data/2.5/find?units=metric&appid=a02467ee9cee115bbdd0b1ff248527e7&q=";
function getTemp(CityName){
    return fetch(URL + CityName)
       .then(res => res.json())
       .then(resJSON => resJSON.list[0].main.temp);
}
export default getTemp;
// getTemp('Hanoi')
//     .then(temp => console.log(temp))
//     .catch(err =>console.log(err))
