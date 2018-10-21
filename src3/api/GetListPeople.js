const URL = "https://randomuser.me/api/?results=15";
export function getListPeople(){
      return fetch(URL)
             .then(res =>res.json())
             .then(resJSON =>resJSON.results)
}
export default getListPeople;
