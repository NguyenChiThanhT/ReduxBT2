const defaultState = {
  CityName: null,
  itemp:null,
  isLoading: false,
  error:false
}
const reducer = (state=defaultState,action) =>{
       switch (action.type) {
         case "START_FETCH":
           return {CityName:null,temp:null,isLoading:true,error:false};
         case "FETCH_SUCCESS":
           return {CityName:action.CityName,temp:action.temp,isLoading:false,error:false};
         case "FETCH_ERROR":
           return {CityName:null,temp:null,isLoading:false,error:true};
         default:
           return state;
       }
}
export default reducer;
