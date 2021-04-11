import { useLogin, LoginProvider } from "./hooks/useLogin";

import './styles/Global.css';
import AppRoutes from "./pages/AppRoutes";

function App() {
  const { isLogedIn  } = useLogin();
  
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
