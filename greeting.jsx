import React,{useState} from "react";

const greeting = (props) => {
    const user = props.info;
    const [color,setcolor] = useState("skyblue")

    function handleChange() {
        setcolor(color==="skyblue" ? "red" : "skyblue")

    }
  return (
    <>
    <ul>
        {user.map ((user) => (
      <li key ={user.user} style = {{color:color}}>
        Hello, {user.name}, Age : {user.age}, Address : {user.address}
      </li>
      ))}
    </ul>
    <button onClick = {() => handleChange("red")}>
    change color
    </button>
    </>
  )
}

export default greeting
