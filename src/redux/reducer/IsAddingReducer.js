const IsAddingReducer = (state = false,action) =>{
        if(action.type==="TOGGLE_ISADDING") return !state;
        return state;
}
export default IsAddingReducer;
