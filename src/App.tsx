import { ListHeader } from "./components/ListHeader";
import { SideBar } from "./components/SideBar";
import { ToDoList } from "./components/ToDoList";
import './styles/Global.css';

function App() {
  return (
    <div className="App">
      <SideBar />
      <ToDoList />
      <ListHeader />
    </div>
  );
}

export default App;
