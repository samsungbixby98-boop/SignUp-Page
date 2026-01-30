import { useState } from "react";
import SignUpModal from "./components/SignUpModal.jsx";
import PirateLogo from "./components/PirateLogo.jsx";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("🏴‍☠️ Welcome Pirate! (Demo Login)");
  };

  return (
    <div className="page">
      {/* Navbar */}
      <header className="nav">
        <div className="nav-brand">
          <PirateLogo />
          <div>
            <h2>One Piece</h2>
            <p>Frontend-only Pirate Login UI (React + Vite)</p>
          </div>
        </div>
      </header>

      {/* Cards */}
      <div className="auth-container">
        {/* Login */}
        <div className="auth-card">
          <h3>Welcome Back 👒</h3>
          <p className="muted">Login to enter the Grand Line</p>

          <form className="form" onSubmit={handleLogin}>
            <input
              className="input"
              type="email"
              placeholder="Pirate Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="input"
              type="password"
              placeholder="Pirate Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="btn btn-primary" type="submit">
              Enter Ship
            </button>
          </form>
        </div>

        {/* Signup */}
        <div className="auth-card signup-card">
          <h3>New Pirate? ⚓</h3>
          <p className="muted">Join the crew and start your adventure.</p>

          <button className="btn btn-outline" onClick={() => setShowModal(true)}>
            Join Crew
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && <SignUpModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
