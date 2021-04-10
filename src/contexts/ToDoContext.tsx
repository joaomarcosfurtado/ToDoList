import { createContext, useState, ReactNode } from 'react';


interface ToDoContextData {
  isAddNewToDoOpen: boolean;
  openAddNewToDoModal: () => void;
  closeAddNewToDoModal: () => void;
}

interface TodoProviderProps {
  children: ReactNode;
}

export const ToDoContext = createContext( {} as ToDoContextData );


export function TodoProvider( {children}: TodoProviderProps ) {
  
  
  const [isAddNewToDoOpen, setAddNewToDoOpen] = useState(false)
  
  function openAddNewToDoModal() {
    setAddNewToDoOpen(true);
  }

  function closeAddNewToDoModal() {
    setAddNewToDoOpen(false);
  }
  
  
  return (
    <ToDoContext.Provider 
      value={{
        isAddNewToDoOpen, 
        openAddNewToDoModal, 
        closeAddNewToDoModal
      }}
    >  
      {children} 
    </ToDoContext.Provider> 
  )
}