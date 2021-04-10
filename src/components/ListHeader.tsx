import '../styles/components/ListHeader.css';
import lightIcon from '../assets/icons/light.svg'


export function ListHeader() {
  return (
    <div className="listHeader">
      <div className="listHeaderContent">
        <h2>My Day</h2>
        <p>Wednesday, 19 April</p>
        
      </div>
      <div className="night-mode-image">
        <a href="#"><img src={lightIcon} alt="Modo Noturno"/></a>
      </div>
    </div>
  )
}