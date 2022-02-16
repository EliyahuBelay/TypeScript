import { SHOW } from "../Action/Student/StudentType";

export const StudentReducer = (state:any,action:any) : any=>{
    switch (action.type) {
        case SHOW:
            return action.payload
    
        default:
            return state;
    }
}