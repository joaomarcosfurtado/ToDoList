import { ListHeader } from "../components/ListHeader/index";
import { SideBar } from "../components/SideBar/SideBar";
import { ToDoList } from "../components/ToDoList";
import { TodoProvider } from "../hooks/useToDo"
import { useLogin, LoginProvider } from "../hooks/useLogin";

import '../styles/Global.css';

function ToDoPages() {
  const { isLogedIn  } = useLogin();
  
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
