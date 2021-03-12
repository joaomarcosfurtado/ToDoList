import '../styles/components/SideBar.css';
import { SideBarList } from './sideBar/SideBarList';
import { Profile } from './sideBar/Profile';

export function SideBar() {
  return (
    <div className="sideBar">
      <Profile />

      <div className="boxListToDo">
        {/* <SideBarList /> */}
      </div>

    </div>
  )
}