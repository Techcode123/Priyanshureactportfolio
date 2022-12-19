import React from "react";
const ToDoList=(props)=>{
    return (
    <>
    <div className="todo_style">
    <button className="btnn" onClick={()=>{
        props.onSelect(props.id);
    }}>Delete</button>
    <li>{props.text}</li>
    </div>
    </>
    ) ;
}
export default ToDoList;