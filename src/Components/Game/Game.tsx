import { useEffect, useLayoutEffect, useState } from "react";

/////////////////////////////////// not succed ////////////////////////////
//question 21
// export const DisplayBiggestNum = () => {
//     let array: number[] = [];
//     let counter:number = 0;
//     // let biggestNum:number;

//         while (counter == 0) {
//             array.push(Number(prompt("put number")));
//             if (array[array.length - 1] == 0) {
//                 counter++;
//                 console.log("kkk");

//             }
//             console.log(array);
//         }
//         // biggestNum = Math.max(...array);

//     // let userNum: number = Number(prompt("put number"))
//     // array.push(userNum);
//     console.log(array);

//     // console.log(Math.max(...array));
//     let biggerNum = array.sort((a, b) => a - b)[array.length-1];
//     console.log(biggerNum);

//     return (
//         <p>{biggerNum}</p>
//     )
// }

/////////////////////////////////// not succed ////////////////////////////

//question 22
export const ReturnEvenNumbers = () => {
    const [number, setNumber]:any[] = useState();
    let array: number[] = [];
    const UserInput = (event: any) => {
        setNumber(event.target.value);
        array.push(number);
        console.log(array);
    }
    const Add = () => {

    }

    return (
        <div>
            <input type={"number"}onInput={UserInput} />
            <button onClick={Add}>Add To Array</button>
        </div>

    )
}

///does not finnished