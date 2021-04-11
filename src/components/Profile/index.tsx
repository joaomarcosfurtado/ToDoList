import { useToDo } from '../../hooks/useToDo';
import { useState } from 'react';


import { BsSearch } from 'react-icons/bs';

import btClose from '../../assets/icons/close.svg'

import './styles.css';


export function Profile() {
  const { openSideBar } = useToDo();

  const [ hideUsername, setIshideUsername ] = useState(true)

  function hideUserName () {
    if (hideUsername) {
      setIshideUsername(false)
    } else setIshideUsername(true)
  }

  return (
    <div className="profile">
      
      <div className="boxUserName">
        <img className="userPicture" src="https://github.com/joaomarcosfurtado.png" alt="Foto de perfil" />
        <h3 className="userName">João Marcos</h3>
      </div>
      
      <form className="boxRightSide">
        <img 
          src={btClose} 
          alt="Fechar"
          onClick={openSideBar}
          className="btCloseSideBar"
        />
        
        <input
          type="text" 
          className="inputSearchCategory"
          onClick={hideUserName}
        />

        <button type="submit" className="btSearchCatergory">
          <BsSearch color="#9a9999"
            className="buttonSearchCategory"
          /> 
        </button>

        
      </form>

      
    </div>
  )
}