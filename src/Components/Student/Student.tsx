import { useReducer } from "react";
import { StudentReducer } from '../../Reducers/StudentReducer';
import { IStudent } from '../../Models/Student/IStudent.interface';

export const Student = () => {
    let someStudent:IStudent = {fname:"",lname:"",age:0};
    const [student, dispatchStudent] = useReducer(StudentReducer, someStudent)
    // const 
    console.log(student);
    
    return (
        <div>
            <p>this is student</p>
            {()=>{
                for (const item of student) {
                    return <p>{item[item]}</p>
                }
            }}
            {/* <button onClick={}>Go</button> */}
        </div>
    )
} 