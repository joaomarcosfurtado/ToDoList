import '../styles/components/AddNewToDo.css'
import btClose from '../assets/icons/close.svg'
import { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

export function AddNewToDo() {

  const { closeAddNewToDoModal } = useContext(ToDoContext);
  
  return(
    <div className="overlay">
      <div className="container-add-new-todo">
        <header>Add new to-do:</header>
        
        
        <form action="" className="Modal-Add-ToDo">
          
          <label htmlFor="ToDo-Name" >To-Do Title: </label>
          <input 
            id="ToDo-Name" 
            name="ToDo-Name" 
            type="text"
            
          />

          <label htmlFor="ToDo-Description" >Date: </label>
          <input 
            id="ToDo-Date" 
            name="ToDo-Date" 
            type="Date"
          />
          
          <label htmlFor="ToDo-Description">Description: </label>
          <textarea name="Description" placeholder="Write the To Do description"> 
          </textarea>
          
          <input 
            id="ToDo-Submit" 
            name="ToDo-Submit" 
            type="submit"
            value="Send"
          />
          
        </form>

        <button type="button" className="btClose" onClick={closeAddNewToDoModal} >
          <img src={btClose} alt="Close Modal"/>
        </button>
      </div>
    </div>
  );
}