import React from 'react'

const Functions = ({dispatch,text}) => {
    // console.log(text)
  return (
    <div>
        <button onClick={()=>dispatch({type:{text}})}>{text}</button>
    </div>
  )
}

export default Functions