import { Link } from "react-router-dom";

const Profile = ({ user, logout }) => {
  return (
    <div>
      <h1>Perfil de Usuario</h1>
      {user && <p>Usuario: @{user.username}</p>}
      <Link to="/">Volver al Inicio</Link>
      <br />
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;