import React from "react";

const UserOutput = (props) =>{
  return(
    // name displayed using props methods 
    <>
      <p className=" font-extrabold text-amber-500 text-3xl">my name is {props.userName} and i am a Software Developer</p>
      <input className=" rounded-2xl h-12 w-80" type="text" onChange={props.change} value={props.userName}></input>
    </>
  )
}


export default UserOutput;