import { SHOW } from "./StudentType";

export const show = (value:any) : object=>{
    return(
        {type:SHOW,payload:value}
    )
}