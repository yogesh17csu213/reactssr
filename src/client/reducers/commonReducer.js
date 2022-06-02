export default (state=[],action)=>{
    switch(action.type){
        case 'HEADER_DATA':
            return action.payload
        default :
            return state
    }
}