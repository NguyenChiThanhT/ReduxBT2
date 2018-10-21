const defaultArrWords =
      [
          {id:1,en:"action",vn:"hanhdong",memorized:true,isShow:false},
          {id:2,en:"actor",vn:"dien vien",memorized:false,isShow:false},
          {id:3,en:"activity",vn:"hoatdong",memorized:true,isShow:false},
          {id:4,en:"active",vn:"chu dong",memorized:true,isShow:false},
          {id:5,en:"bath",vn:"tam",memorized:false,isShow:false},
      ];

const ArrwordsReducer = (state=defaultArrWords,action) =>{
       if(action.type==="TOGGLE_MEMORIZED"){
             return state.map(e =>{
                if(e.id !== action.id) return e;
                return{...e,memorized:!e.memorized};
              })
       }
       if(action.type==="ADD_WORD"){
             return [{
               id:state.length +1,
               en:action.en,
               vn:action.vn,
               memorized:false,
               isShow:false
             }].concat(state)
       }
       if(action.type==="TOGGLE_ISSHOW"){
             return state.map(e =>{
                if(e.id !== action.id) return e;
                return{...e,isShow:!e.isShow};
              })
       }
       return state;
}
export default ArrwordsReducer;
