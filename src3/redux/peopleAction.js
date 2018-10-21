import getListPeople from "../api/GetListPeople";
import {
  FETCHING_PEOPLE_REQUEST,
  FETCHING_PEOPLE_SUCCESS,
  FETCHING_PEOPLE_FAILURE
} from './action/types';
export function fetchingPeopleRequest(){
     return {type: FETCHING_PEOPLE_REQUEST}
}
export function fetchingPeopleSuccess(json){
     return {
       type: FETCHING_PEOPLE_SUCCESS,
       payload: json
     }
}
export function fetchingPeopleFailure(error){
     return {
       type:FETCHING_PEOPLE_FAILURE,
       payload:error
     }
}
export function fetchPeople(){
       return dispatch => {
              dispatch(fetchingPeopleRequest())
              getListPeople()
              .then(results => dispatch(fetchingPeopleSuccess(results)))
              .catch(error => dispatch(fetchingPeopleFailure(error)))
       }
}
// export const fetchPeople = () =>{
//     return async dispatch => {
//       dispatch(fetchingPeopleRequest());
//       try {
//          let response = await fetch("https://randomuser.me/api/?results=15");
//          let json = await response.json();
//          dispatch(fetchingPeopleSuccess(json.results));
//       } catch(error){
//           dispatch(fetchingPeopleFailure(error))
//       }
//     }
// }
