import { useEffect } from "react";

export const Home = (): string => {
    let age: number = 25;
    let fname: string = "eliyahu";
    let isArrivedToClass: boolean = true;
    let arrayOfGrades: number[] = [95, 96, 97, 98, 99, 100];
    return (
        `name  ${fname} ,age  ${age},  is arrived to class ${isArrivedToClass}, grades  ${arrayOfGrades}`
    )
}




export const PopAlertOnClick = () => {

    return (
        <button onClick={() => alert(Home())}>Alert</button>
    )
}


export function PopAlert(): void {
    useEffect(() => alert("welcom"), [])
}



//question 8
export const ReturnIfMoreThan4Chars = (str: string): boolean => {
    return str.length > 4 ? true : false
}

//question 9
export const NameNAge = (name: string, age: number) => {
    return age > 15 ? name : "wrong class"
}

//question 10
export const ReturnFNameLNameNAge = (fname: string, lname: string, age: number = 0) => {
    return `${fname} ${lname} ${age}`
}

//question 11
export const LogNamesRestOperator = (...restName: string[]): void => {
    console.log(restName);
}

//question 12
export const LogOrAlert = (fname: string, lname?: string, grade: number = 60, ...namesOfFriends: string[]): void => {
    useEffect(() => {
        lname !== undefined ? console.log(fname, lname, grade, namesOfFriends) : alert(`${fname}  ${grade} ${namesOfFriends}`)
    }
        , [])

}

//question 13
export const ReturnBiggerNum = (...numbers: number[]): number => {
    return Math.max(...numbers)
}

//question 14 
export const ReturnLowestNumNName = (name: string, ...numbers: number[]): string => {
    return `${name} ${Math.min(...numbers)}`
}

//question 15 
export const ReturnIfAreDoubleNameExist = (...names: string[]) => {
    const Unique = Array.from(new Set(names))
    return names.length === Unique.length ? false : true

    //set is a data structore that stores a collection of unique values.
    //Array.from method that creates a new, shallow-copied Array instance from an array-like or iterable object.
    /////////////////////////////////////////
    // let anotherArray:string[] = names;
    // for (let i = 0; i < names.length; i++) {
    //     for (let j = 1; j < names.length; j++) {
    //         if (names[i] != names[j]) {
    //             console.log(true);

    //         }
    //     }
    // }
    // console.log(false);
    ///////////////////////////////
    // for(let i = 0; index < names.length; index++){
    //     if (names[index] == anotherArray[index]) {
    //         return true
    //     }
    // }
    // return false;


    //////////////////////////////
    //    return names.every(
    //        (value:string,index:number) =>
    //         value === anotherArray[index]
    //     )
}

//question 16
export const ReturnOrderOrNot = (grade?: number, ...names: string[]): string[] => {
    return grade == undefined ? names.sort() : names.reverse()
}

//question 17
export const ReturnIfExistInArray = (num: number = 1): boolean => {
    let array: number[] = [];
    for (let i = 0; i < 5; i++) { array[i] = Math.floor(Math.random() * 11); }

    for (let i = 0; i < array.length; i++) { if (num == array[i]) return true }

    return false
}

//question 18
export const LogObj = (...restOfObj: object[]): void => {
    console.log(restOfObj);
}

//question 19
export const LogBiggerObj = (...restOfObj: any[]): object => {
    let biggerNum: object = restOfObj[0];
    restOfObj.forEach(element => {
        if (element.age > biggerNum) biggerNum = element.age
    });
    return biggerNum;
}

//question 20
export const ReturnIfNameInArray = (name: string, ...restOfObj: any[]):boolean => {
    for (let i = 0; i < restOfObj.length; i++) {
        if (restOfObj[i].name == name) {
            return true
        }
    }
    return false
}

