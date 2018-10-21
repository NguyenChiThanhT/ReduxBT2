const FilterStatusReducer = (state="SHOW_ALLL",action) => {
       if(action.type==="FILTER_SHOW_ALL") return "SHOW_ALLL";
       if(action.type==="FILTER_MEMORIZED") return "MEMORIZED";
       if(action.type==="FILTER_NEED_PRACTICE") return "NEED_PRACTICE";
       return state;
}
export default FilterStatusReducer;
