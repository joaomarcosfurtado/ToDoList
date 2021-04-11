import {  useState } from 'react';
import './styles.css';

export function ToDoListItem() {

  const [isToDoChecked, setIsToDoChecked] = useState(false)

  function verifyCheckedState() {
    if (isToDoChecked === true) {
      setIsToDoChecked(false)
    } else setIsToDoChecked(true);
    console.log("cheguei aqui")
  }

  return (
    <div className="toDoListItem" >
         
        <form className="form-ToDoListItem">
          
         
          <div className="inputGroup" >
            <input 
              id="option1" 
              name="option1" 
              type="checkbox"
              readOnly={true}
              checked={isToDoChecked}
              onClick={verifyCheckedState}
            />
            <label htmlFor="option1">
              Get groceries for dinner
              <p>To-do</p>
            </label>
          </div>
          

        </form>
          
    </div>
  )
}