import React from 'react'

const CalButton = ({dispatch,text}) => {

    // console.log(text)
  return (
    <div>
  <button onClick={()=>dispatch({type:'number',payload:{text}})}>{text}</button>
    </div>
  )
}

export default CalButton