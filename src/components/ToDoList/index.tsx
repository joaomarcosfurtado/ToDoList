import { ToDoListItem } from "../ToDoListItem/index";
import { RiAddCircleFill } from "react-icons/ri";
import { AddNewToDo } from '../AddNewToDo/index';

import { useToDo } from "../../hooks/useToDo";

import './styles.css';


export function ToDoList() {
  
  const { openAddNewToDoModal, isAddNewToDoOpen } = useToDo();

  
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