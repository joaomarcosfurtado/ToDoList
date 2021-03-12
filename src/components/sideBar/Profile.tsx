import '../../styles/components/Profile.css';
import { BsSearch } from 'react-icons/bs';

export function Profile() {
  return (
    <div className="profile">
      <img className="userPicture" src="https://avatars.githubusercontent.com/jfelipecordeiroalmeida" alt="Foto de perfil" />
      <div className="boxUserName">
        <h3 className="userName">Jose Felipe</h3>
      </div>
     <BsSearch className="searchLists"/> 
    </div>
  )
}