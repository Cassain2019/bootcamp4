import React, {useState} from 'react';
import './Room.css'


function Room() {
    let [islit, setlit] = useState(false);
    let [age, setAge] = useState(23);
    //const state = useState(true);
    //const islit = state[0];
    //const setlit = state[1];

    //function updateLit(){
    //    console.log("Button Clicked");
    //    setlit(!islit);
    //}

    function increaseAge(){
        console.log("Button Clicked");
        setAge(++age);
    }

    //<div className={'Room ${islit? "lit": "dark"}'} >
    return (
    <div className={"room " +(islit? "lit" : "dark") }>
        This Room is Dark or Light : Lit = {islit? "lit": "dark"}
        <br/>
        Age : {age}
        <br/>

        <button onClick={()=> setlit(!islit)}>Toggle Light</button>
        <br/>
        <button onClick={increaseAge}>Increase Age</button>
    </div>

    );
}

export default Room;
