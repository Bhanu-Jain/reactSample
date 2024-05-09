import React, { createContext, useContext, useEffect, useState } from "react";
import ToDoListItemComponent from "./ToDoListItemComponent";
import "./ToDoListComponent.css";
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Button from '@mui/material/Button';
import { AddBusinessTwoTone } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

import ToDoListItemComponent2 from "./ToDoListItemComponent2";

const ListData = createContext();

const ToDoListComponent = () => {

    const [toDoList, setToDoListData] = useState([]);
    const [inputText, setInputText] = useState("");

    useEffect(() => {

        console.log("Data added in input");
    }, [inputText]);

    const handleInput = (event) => {

        setInputText(event.target.value);
    }

    const handleAdd = () => {

        if (inputText === "") {

            alert("Please add some text before adding!");

        } else {

            setToDoListData((prevList) => {
                return [...prevList, inputText];
            });

            setInputText("");
        }

    }

    const deleteFromList = (event) => {

        setToDoListData((prevList) => {

            return prevList.filter((text, index) => {
                return (index != event.target.id);

            });
        });
    }

    const [showBtnData, setShowBtnData] = useState({

        text: "Show list",
        isListVisible: false
    });

    const handleShowOrHide = () => {

        setShowBtnData((prevValue) => {

            let newText = !prevValue.isListVisible ? "Hide list" : "Show list";
            return {

                text: newText,
                isListVisible: !prevValue.isListVisible
            }
        });
    }

    return (
        <>
        <ListData.Provider value = {toDoList}>
            <div className="parent_div">
                <div className="child_div" />
                <div className="child_div_main">
                    <div className="list_div_main">
                        <div className="list_div_child_heading">
                            <h1>To do list</h1>
                        </div>
                        <div className="list_div_child_input">
                            <div className="list_div_child_input_text">
                                <input
                                    type="text"
                                    className="list-div-input"
                                    placeholder="Enter your text here"
                                    value={inputText}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="list_div_child_input_button">
                                <Tooltip title="Add">
                                    <Button variant="contained" onClick={handleAdd}
                                        className="input_button" ><AddIcon /></Button>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="list_div_child_input">

                            <Button variant="contained" onClick={handleShowOrHide}
                                className="input_button">{showBtnData.text}</Button>
                        </div>
                        <div className="list_div_child_output">
                            {showBtnData.isListVisible && toDoList.map((toDoText, index) =>
                                <ToDoListItemComponent
                                    key={index}
                                    id={index}
                                    toDoText={toDoText}
                                    handleDelete={deleteFromList} />
                            )}
                        </div>
                        <div>
                            <ToDoListItemComponent2/>
                        </div>
                    </div>
                </div>
                <div className="child_div" />
            </div>
            </ListData.Provider>
        </>
    );

}

export default ToDoListComponent;
export { ListData };