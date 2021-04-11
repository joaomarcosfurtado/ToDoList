import { AddNewToDo } from '../AddNewToDo/index';
import { ToDoListItem } from "../ToDoListItem/index";
import { useToDo } from "../../hooks/useToDo";

import { RiAddCircleFill } from "react-icons/ri";

import './styles.css';


export function ToDoList() {
  
  const 
    { 
      handleOpenAddNewToDoModal, 
    } = useToDo();

  
  return (
    <div className="toDoList">
         
      <div className="toDoList-Container">
        <ToDoListItem />
        <ToDoListItem />
      </div>
      
      <div className="add-to-do">
        <button onClick={handleOpenAddNewToDoModal} >
          <RiAddCircleFill className="add-icon" />
          New To Do
        </button>
      </div>

      <AddNewToDo />

    </div>
  )
}