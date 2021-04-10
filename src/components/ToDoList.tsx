import { ToDoListItem } from "./ToDoListItem";
import { RiAddCircleFill } from "react-icons/ri";
import { useContext } from 'react';
import { AddNewToDo } from './AddNewToDo';
import '../styles/components/ToDoList.css';import '../styles/components/ToDoList.css';
import { ToDoContext } from "../contexts/ToDoContext";


export function ToDoList() {
  
  const { openAddNewToDoModal, isAddNewToDoOpen } = useContext(ToDoContext);

  
  return (
    <div className="toDoList">
         
        <div className="toDoList-Container">
          <ToDoListItem />
          <ToDoListItem />
        </div>
        <div className="add-to-do">
          <button onClick={openAddNewToDoModal} >
            <RiAddCircleFill className="add-icon" />
            New To Do
          </button>
        </div>

        { isAddNewToDoOpen && <AddNewToDo /> }
    </div>
  )
}