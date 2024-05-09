import React from "react";
import "./ToDoListItemComponent.css";

const ToDoListItemComponent = ({id , toDoText, handleDelete}) => {

    return (
        <>
            <div>
                <div className="parent_div_list">
                    <div className = "child_div_btn">
                        <button className="list-btn" id={id} onClick = {handleDelete}>X</button>
                    </div>
                    <div className = "child_div_text">{toDoText}</div>
                </div>
                <div className="parent_div_list_hr">
                    <hr/>
                </div>
            </div>
        </>
    );

}

export default ToDoListItemComponent;