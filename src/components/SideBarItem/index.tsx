import { FiSun } from 'react-icons/fi'
import './styles.css'

export function SideBarItem () {
  const isActive = true;
  return isActive ? (

    <li className="sideBarItem sideBarItemIsActive">
      <div className="SideBarItemContent">
        <div className="sideBarItemTitle">
          <FiSun className="sideBarItemIcon"/>
          <p> My Day </p>
        </div>
        <p>4</p>
      </div>
    </li>
    
  ) : (

    <li className="sideBarItem">
      <div className="SideBarItemContent">
        <div className="sideBarItemTitle">
          <FiSun className="sideBarItemIcon"/>
          <p> My Day </p>
        </div>
        <p>4</p>
      </div>
    </li>

  )
}