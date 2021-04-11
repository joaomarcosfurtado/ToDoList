import { Profile } from '../Profile/index';

import './styles.css';
import { SideBarItem } from '../SideBarItem';
import { useToDo } from '../../hooks/useToDo';

import { IoAddOutline } from 'react-icons/io5'


export function SideBar() {
  const { isSideBarOpen } = useToDo();
  
  return isSideBarOpen ? 
  (
    <div className="sideBar sideBarIsActive">
      <Profile/>
      <nav className="navSideBar">
        <ul className= "sideBarList">
          <SideBarItem />
          <SideBarItem />
        </ul>
      </nav>
    <button className="addListButton">
      <IoAddOutline className="addListIcon" />
      <p>New List</p>
    </button>  
    </div>
  ) : (
    <div className="sideBar">
      <Profile/>
      <nav className="navSideBar">
        <ul className= "sideBarList">
          <SideBarItem />
          <SideBarItem />
          <SideBarItem />
        </ul>
      </nav>
      <button className="addListButton">
        <IoAddOutline className="addListIcon" />
        <p>New List</p>
      </button>
    </div>
  )
}