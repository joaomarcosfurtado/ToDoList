import { ListHeader } from "../components/ListHeader";
import { SideBar } from "../components/SideBar";
import { ToDoList } from "../components/ToDoList";
import { TodoProvider } from "../contexts/ToDoContext"
import { LoginContext, LoginProvider } from "../contexts/LoginContext";
import { useContext } from "react";

import '../styles/Global.css';

function ToDoPages() {
  const { isLogedIn  } = useContext(LoginContext);
  
  console.log(isLogedIn)
  return (
    <div className="App">
      
      <LoginProvider >
      
        { isLogedIn && (
          
          <TodoProvider>
            <SideBar/>
            <ToDoList/>
            <ListHeader/>
          </TodoProvider>    
      
          )}

      </LoginProvider>
      
    </div>
  );
}

export default ToDoPages;
