import '../styles/components/Profile.css';

export function Profile() {
  return (
    <div className="profile">
      <img className="userPicture" src="images/user.svg" alt="Foto de perfil" />
      <div className="boxUserName">
        <h3 className="userName">Jose Felipe</h3>
      </div>
      <img className="searchLists" src="images/search.svg" alt="Procurar" />
    </div>
  )
}