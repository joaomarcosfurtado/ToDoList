import { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import { api } from '../services/api';

interface Categories {
  id: string,
  user_id: string,
  name: string,
  description: string,
  created_at: Date;
}

interface ToDoContextData {
  isAddNewToDoModalOpen: boolean;
  isSideBarOpen: boolean;
  handleOpenAddNewToDoModal: () => void;
  handleCloseAddNewToDoModal: () => void;
  handleOpenAddCategoryToDoModal: () => void;
  handleCloseAddNewCaterogryModal: () => void;
  openSideBar: () => void;
}

interface TodoProviderProps {
  children: ReactNode;
}

export const ToDoContext = createContext( {} as ToDoContextData );


export function TodoProvider( {children}: TodoProviderProps ) {
  
  const [ toDoCategories, setToDoCategories ] = useState<Categories[]>([])
  const [ isSideBarOpen, setIsSideBarOpen ] = useState(false)
  const [ isAddNewToDoModalOpen, setIsAddNewToDoModalOpen ] = useState(false)
  const [ isAddNewCategoryModalOpen, setIsAddNewCategoryModalOpen ] = useState(false)
  
  useEffect(() => {
    // const axios = require('axios').default;
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTgwNzAzOTEsImV4cCI6MTYxODE1Njc5MSwic3ViIjoiZTkwYWJmOTAtNzQyYS00OTFkLTkzNDUtYTJlZDljMzAwZjQ0In0.6STts7OuD8FaULOR28jdy-nRep1XDf-gXXtwF6ElPVE"
    // const AuthStr = `Bearer ${token}`
    
    // axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    
    
    //const headers = { Authorization: `Bearer ${token}` };

    // axios.get('http://localhost:3333/categories',
    //  { headers: { Authorization: AuthStr } }
    //  ).then(function (response: { status: any; }) {
    //     console.log(response);
    //     // toDoCategories(toDoCategories); 
    //   })
    //   .catch(function (error: { status: any; }) {
    //     // console.log(error.status);
    //   });

    api
    .get('categories',)
    .then(function (response: { status: any; }) {
          console.log(response);
          // toDoCategories(toDoCategories); 
    })
    .catch(function (error: { status: any; }) {
           console.log(error);
           //console.log(response);
    });


  },[])
  
  function handleOpenAddNewToDoModal() {
    setIsAddNewToDoModalOpen(true);
  }

  function handleCloseAddNewToDoModal() {
    setIsAddNewToDoModalOpen(false);
  }

  function handleOpenAddCategoryToDoModal() {
    setIsAddNewCategoryModalOpen(true);
  }

  function handleCloseAddNewCaterogryModal() {
    setIsAddNewCategoryModalOpen(false);
  }

  function openSideBar() {
    if (isSideBarOpen) {
      setIsSideBarOpen(false)
    } else setIsSideBarOpen(true)
  }
  
  
  return (
    <ToDoContext.Provider 
      value={{
        isAddNewToDoModalOpen, 
        isSideBarOpen,
        handleOpenAddNewToDoModal, 
        handleCloseAddNewToDoModal,
        handleOpenAddCategoryToDoModal,
        handleCloseAddNewCaterogryModal,
        openSideBar,
      }}
    >  
      {children} 
    </ToDoContext.Provider> 
  )
}

export function useToDo(): ToDoContextData {
  const context = useContext(ToDoContext);

  return context;
}