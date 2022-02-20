import { useEffect, useState } from "react"

export const Loto = () => {
    let [playerName, setPlayerName]: any[] = useState('')
    const [userNumbers, setuserNumbers]: any[] = useState([])
    const [computerNums,setComputerNums]:any[] = useState([])
    useEffect(() => {
        playerName = String(prompt("put your player name"));
        let chosenCurrentUserNum: number;
        let counter: number = 0;
        while (counter < 10) {
            chosenCurrentUserNum = Number(prompt("put a number please"))
            if (userNumbers.includes(chosenCurrentUserNum) == false) {
                userNumbers.push(chosenCurrentUserNum);
                if (chosenCurrentUserNum > 100) {
                    userNumbers.pop()
                    counter--;
                }
                counter++
            }
        }
        console.log(playerName, userNumbers);
        // ComputerNums(computerNums);

    }, [userNumbers])
}

export const ComputerNums = (state:number[])=>{
    useEffect(()=>{
        let counter:number = 0;
        while(counter < 5){
            let num:number = Math.floor(Math.random()*50)
            if(state.includes(num) == false){
                state.push(num)
                counter++
            }
        }
        console.log(state);
        
    },[])
}