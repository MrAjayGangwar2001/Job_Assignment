import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import './App.css'

function App() {

  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("user")
  );

  const [showSignup, setShowSignup] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
  };

  return (
    <div>
      <Navbar
        loggedIn={loggedIn}
        onLogout={handleLogout}
        onSignupToggle={() => setShowSignup(!showSignup)}
      />

      {!loggedIn ? (
        showSignup ? (
          <Signup setShowSignup={setShowSignup} />
        ) : (
          <Login setLoggedIn={setLoggedIn} />
        )
      ) : (
        <TodoList />
      )}
    </div>
  );
}

export default App;
