import getTemp from "../api/GetTemp";
export function StartFetchData(){
    return {type:"START_FETCH"};
}
export function FetchSuccess(CityName,temp){
    return {type:"FETCH_SUCCESS",CityName,temp};
}
export function FetchError(){
    return{type:"FETCH_ERROR"};
}
export function FetchDataThunk(CityName){
    return dispatch =>{
          dispatch(StartFetchData())
          getTemp(CityName)
          .then(temp => dispatch(FetchSuccess(CityName,temp)))
          .catch(()=>dispatch(FetchError()))
    }
}
