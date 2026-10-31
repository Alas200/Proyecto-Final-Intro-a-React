import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [tweets, setTweets] = useState([
    { id: 1, text: "¡Hola a todos! Este es mi primer tweet.", likes: 0 }
  ]);

  const login = (username) => {
    const userData = { username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleAddTweet = (text) => {
    const newTweet = { id: Date.now(), text, likes: 0 };
    setTweets([newTweet, ...tweets]);
  };

  const handleLike = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route
          path="/"
          element={
            <Home
              user={user}
              logout={logout}
              tweets={tweets}
              onAddTweet={handleAddTweet}
              onLike={handleLike}
            />
          }
        />
        <Route
          path="/profile"
          element={user ? <Profile user={user} logout={logout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;