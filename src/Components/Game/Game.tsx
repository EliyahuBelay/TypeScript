import { useCallback, useEffect, useLayoutEffect, useState } from "react";

/////////////////////////////////// eventually succed ////////////////////////////
//question 21
// const GetAnArray = ():number=>{
//     let array: number[] = [];

//     let counter: number = 0;
//     while (counter == 0) {
//         array.push(Number(prompt("put number")));
//         if (array[array.length - 1] == 0) {
//             counter++;
//         }
//     }
//     console.log(array);
//     let biggestNum: number = Math.max(...array);
//     return biggestNum;
// }

export const DisplayBiggestNum = () => {
    const [array, setArray]: any[] = useState([])
    const [number, setNumber] = useState([])
    useEffect(() => {
        let counter: number = 0;
        while (counter == 0) {
            array.push(Number(prompt("put num")))
            if (array[array.length - 1] == 0) {
                counter++;
            }
        }
        // console.log(array);
        array.sort(((a: number, b: number) => b - a));
        // console.log(array);
        setArray(array);
        // console.log(array);
        setNumber(array[0])

    }, [array])
    // let num:number;

    // console.log(array);
    // let biggestNum: number = Math.max(...array)

    // let num:number = GetAnArray();
    //     // let userNum: number = Number(prompt("put number"))
    //     // array.push(userNum);
    //     console.log(array);

    //     // console.log(Math.max(...array));
    //     let biggerNum = array.sort((a, b) => a - b)[array.length-1];
    //     console.log(biggerNum);

    return (
        <>
            {/* <button onClick={()=>GetAnArray()}>Go</button> */}
            <p>{number}</p>
        </>
    )
}

/////////////////////////////////// eventually succeed ////////////////////////////





///////////////////////////////////////////////////////// eventually succeed ///////////////////////////////////////

//question 22

////////////// not succeed that way ////////////////////////////////////////
// const GetTenNum = () => {
//     let array: number[] = [];

//     let counter: number = 0;
//     while (counter < 2) {
//         array.push(Number(prompt("put num")));
//         counter++;
//     }
//     return array;
// }
////////////// not succeed that way ////////////////////////////////////////

export const ReturnEvenNumbers = () => {
    const [array, setArray]: any[] = useState([])
    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            array.push(Number(prompt("put number")));
            if (array[array.length - 1] % 2 !== 0) {
                array.pop();
            }
        }
        setArray(array)
        // console.log(array);
    }, [])
    return (
        <ul>
            {array.map((item: number, i: number) => <li key={i}>number {item}</li>)}
        </ul>
    )
}
////////////////// not succed that way /////////////////////////
// const [numbers, setNumber]:any[] = useState(0);
// let array: number[] = [];
// useEffect((event:any)=>{
//     array.push(event.target.value)
// },[numbers])
// const UserInput = (event: any) => {
//     // setNumber();
//     numbers = 
//     // console.log(numbers);
//     let ff = event.target.value
//     event.target.value
//     array.push(ff);
//     console.log(array);
// }
// const Add = () => {
// }
////////////////// not succed that way /////////////////////////

// document.write(array.forEach(element => element))
// return (
//     <ul>
//         {array.forEach(element => <li>{element}</li>)}
//     </ul>

// )
// }
///////////////////////////////////////////////////// eventually succeed ///////////////////////////////////////


//question 23
export function DisplaySuccessOrFail() {
    const [message, setMessage] = useState(false)
    useEffect(() => {
        const userNum: number = Number(prompt("put a number"))
        let array: number[] = [];
        for (let i = 0; i < 10; i++) {
            array.push(Math.floor(Math.random() * 100))
            if (userNum == array[array.length - 1]) {
                setMessage(true)
            }
        }
    }, [])
    return message == true ? <p>Succes</p> : <p>Fail</p>
}

//question 24
export const DisplayNiceOtGood = () => {
    let [userName, setuserName]:any[] = useState('');
    let [ansswer, setansswer]:any[] = useState('');
    useEffect(() => {
        userName = String(prompt("put name please"));

        switch (userName[0].toUpperCase()) {
            case "A":
                setansswer("Nice");
                break;
            case "Z":
                setansswer("Good");
                break;
            default:
                setansswer("not A and not Z");
                break;
        }
    }, [userName])
    return <p>{ansswer}</p>
}

//question 25
export const PrintFizzBuzz = ():void => {
    for (let i:number = 0; i < 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizz buzz", i);
        }
        if (i % 5 == 0 && i % 3 != 0) {
            console.log("buzz", i);
        }
        if (i % 3 == 0 && i % 5 != 0) {
            console.log("fizz", i);
        }
    }
}