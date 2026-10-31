import { Link } from "react-router-dom";
import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";

const Home = ({ user, logout, tweets, onAddTweet, onLike }) => {
  return (
    <div>
      <h1>Inicio</h1>
      {user ? (
        <div>
          <p>Bienvenido, @{user.username}</p>
          <Link to="/profile">Ir al Perfil</Link>
          <br />
          <button onClick={logout}>Cerrar sesión</button>
          <TweetForm onAddTweet={onAddTweet} />
        </div>
      ) : (
        <p>
          <Link to="/login">Inicia sesión</Link> para publicar tweets.
        </p>
      )}

      <hr />
      <TweetList tweets={tweets} onLike={onLike} />
    </div>
  );
};

export default Home;