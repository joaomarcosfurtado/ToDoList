import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

interface LoginContextData {
  isLogedIn: boolean;
  isCreatingAccount: boolean;
  loginTitle: string;
  loginSubTitle: string;
  btCriarConta: string;
  btLogin: string;
  email: string;
  setEmail: ReactNode;
  password: string;
  setPassword: ReactNode;
  logIn: () => void;
  logOut: () => void;
  createAccount: () => void;
}

interface LoginProviderProps {
  children: ReactNode;
}


export const LoginContext = createContext( {} as LoginContextData );

export function LoginProvider( {children}: LoginProviderProps ) {
  const [isLogedIn, setIsLogedIn] = useState(true) 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [isCreatingAccount, setIsCreatingAccount ] = useState(false)

  const [ loginTitle, setLoginTitle ] = useState("Faça login no TaskPad")
  const [ loginSubTitle, setLoginSubTitle ] = useState("Ainda não tem uma conta?")
  const [ btCriarConta, setBtCriarConta] = useState("Criar Conta")
  const [ btLogin, setBtLogin ] = useState("Login")

  
  function createAccount () {
    if( isCreatingAccount === false) {
      setIsCreatingAccount(true)
      setLoginTitle("Crie sua conta no TaskPad");
      setLoginSubTitle("Já tem uma conta?");
      setBtCriarConta("Faça Login");
      setBtLogin("Criar Conta");
    } else {
      setIsCreatingAccount(false)
      setLoginTitle("Faça login no TaskPad");
      setLoginSubTitle("Ainda não tem uma conta?");
      setBtCriarConta("Criar Conta");
      setBtLogin("Login");
    }
    
  }

  function validateLogin() {
    const axios = require('axios').default;

    axios.post('http://localhost:3333/users', {
        email,
        password
      })
      .then(function (response: { status: any; }) {
        console.log(response.status);
        setIsLogedIn(true); 
      })
      .catch(function (error: { status: any; }) {
        alert('Usuário ou senha inválida!')   
        console.log(error.status);
      });

}
  
  function logIn() {
    if( isCreatingAccount === false && validateLogin()) {
    }
  }

  function logOut() {
    setIsLogedIn(false);
  }

  return (
    <LoginContext.Provider 
      value={{
        isLogedIn,
        isCreatingAccount,
        
        loginTitle,
        loginSubTitle,
        btCriarConta,
        btLogin,
        email,
        password,
        logIn,
        logOut,
        createAccount,
        setEmail,
        setPassword,
      }}
    >  
      {children} 
    </LoginContext.Provider> 
  )
}

export function useLogin(): LoginContextData {
  const context = useContext(LoginContext);

  return context;
}