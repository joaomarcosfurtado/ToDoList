import '../styles/components/Profile.css';
import { BsSearch } from 'react-icons/bs';

export function Profile() {
  return (
    <div className="profile">
      <img className="userPicture" src="https://github.com/joaomarcosfurtado.png" alt="Foto de perfil" />
      <div className="boxUserName">
        <h3 className="userName">Jose Felipe</h3>
      </div>
     <BsSearch className="searchLists"/> 
    </div>
  )
}