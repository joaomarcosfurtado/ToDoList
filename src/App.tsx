import { LoginContext, LoginProvider } from "./contexts/LoginContext";
import { useContext } from "react";

import './styles/Global.css';
import AppRoutes from "./pages/AppRoutes";

function App() {
  const { isLogedIn  } = useContext(LoginContext);
  
  console.log(isLogedIn)
  return (
    <div className="App">
      
      <LoginProvider >
      
        <AppRoutes />

      </LoginProvider>
      
    </div>
  );
}

export default App;
