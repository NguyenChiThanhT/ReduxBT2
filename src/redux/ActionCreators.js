export function SHOW_ALLL(){
      return{
        type:"FILTER_SHOW_ALL"
      }
}
export function SHOW_MEMORIZED(){
      return{
        type:"FILTER_MEMORIZED"
      }
}
export function SHOW_NEED_PRACTICE(){
      return{
        type:"FILTER_NEED_PRACTICE"
      }
}

export function TOGGLE_ISADDING(){
       return{
         type:"TOGGLE_ISADDING"
       }
}
export function ADD_WORD(en,vn){
       return{
         type:"ADD_WORD",
         en,
         vn
       }
}
export function memorizedWords(id){
      return {
       type:"TOGGLE_MEMORIZED",
       id
      }
}
export function isShowWords(id) {
      return {
       type:"TOGGLE_ISSHOW",
       id
      }
}
