
import { useReducer } from 'react'
import './App.css'
import CalButton from './Components/CalButton'
import Functions from './Components/Functions'
import styled from "styled-components"

let initialState={
 firstNumber:"",
 secondNumber:'',
 result:'',
 operation:''
}

const reducer=(state=initialState,{type,payload})=>{
switch (type) {
  case "+": 
    console.log(type)
    break;

  default:
    return state;
}
}

function App() {

  const [state, dispatch] = useReducer(reducer, 0);
  
  return ( 
    <DIV>
    <h1>Calculator</h1>
    <div id="calci">
    <div id='display'>"hgfg"</div>
    <Functions text={"AC"} dispatch={dispatch}/>
    <Functions text={"DEL"} dispatch={dispatch}/>
    <Functions text={"+"} dispatch={dispatch}/>
    <CalButton text={1} dispatch={dispatch}/>
    <CalButton text={2} dispatch={dispatch}/>
    <CalButton text={3} dispatch={dispatch}/>
    <Functions text={"-"} dispatch={dispatch}/>
    <CalButton text={4} dispatch={dispatch}/>
    <CalButton text={5} dispatch={dispatch}/>
    <CalButton text={6} dispatch={dispatch}/>
    <Functions text={"*"} dispatch={dispatch}/>
    <CalButton text={7} dispatch={dispatch}/>
    <CalButton text={8} dispatch={dispatch}/>
    <CalButton text={9} dispatch={dispatch}/>
    <Functions text={"/"} dispatch={dispatch}/>
    <Functions text={"."} dispatch={dispatch}/>
    <CalButton text={0} dispatch={dispatch}/>
    <Functions text={"="} dispatch={dispatch}/>

    </div>
    </DIV>
  )
}

const DIV = styled.div`
  background-color: aqua;

  #calci{
    /* padding: 10%; */
    background-color: red;
    display: grid;
    grid-template-columns: repeat(4,1fr);

  }
  #calci div:nth-child(1){
    grid-column: span 4;
    height: 50px;
  }

 
#calci>Functions:nth-child(2) {
  grid-column: span 3;
}

#calci div,
#calci Functions,
#calci CalButton {
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}

#calci div,
#calci Functions {
  background-color: #ffffff;
}

#calci Functions,
#calci CalButton {
  cursor: pointer;
}

#calci Functions:nth-child(2),
#calci Functions:nth-child(5),
#calci Functions:nth-child(8),
#calci Functions:nth-child(11),
#calci Functions:nth-child(14),
#calci Functions:nth-child(17),
#calci Functions:nth-child(20) {
  background-color: #aeae04;
}

#calci CalButton {
  background-color: #d3d3d3;
}

#calci Functions:nth-child(2) {
  grid-column: span 2;
}

/* #calci Functions:nth-child(17) {
  grid-column: span 1;
} */

`

export default App
