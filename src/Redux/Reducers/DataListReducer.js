import {DATA_LIST} from "../Types";

const initialState ={
  list:[]
};

export default (state=initialState,action)=>{
    switch (action.type) {
        case DATA_LIST:
            return{
                ...state,
                list:[...action.data]
            };
        default: return state
    }
}