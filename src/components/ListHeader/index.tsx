import './styles.css';
import lightIcon from '../../assets/icons/light.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useToDo } from '../../hooks/useToDo';

export function ListHeader() {
  const  { openSideBar } = useToDo()
  
  return (
    <div className="listHeader">
      <GiHamburgerMenu 
        className="resposiveSideBarIcon"
        onClick={openSideBar} 
      />
      <div className="listHeaderContent">
        
        <h2>My Day</h2>
        <p>Wednesday, 19 April</p>
        
      </div>
      <div className="night-mode-image">
        <a href="https://github.com/joaomarcosfurtado"><img src={lightIcon} alt="Modo Noturno"/></a>
      </div>
    </div>
  )
}