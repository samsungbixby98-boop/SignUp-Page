import { useState } from "react";
import PirateLogo from "./components/PirateLogo.jsx";
import SignUpModal from "./components/SignUpModal.jsx";
import BackgroundVideo from "./components/BackgroundVideo.jsx";
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("❌ Email must contain @");
      return;
    }

    if (password.length < 6 || !/\d/.test(password)) {
      alert("❌ Password must be 6+ characters and contain a number");
      return;
    }

    alert("✅ Login Successful (Frontend Demo)");
  };

  return (
    <div className="page">
      
      {/* Background Video */}
      <BackgroundVideo />

      {/* Navbar */}
      <header className="nav">
        <PirateLogo />
        <div>
          <h2>One Piece</h2>
          <p className="tagline">Cyberpunk Pirate Login UI</p>
        </div>
      </header>

      {/* LOGIN + SIGNUP CARDS */}
      <div className="auth-container">

        {/* LOGIN */}
        <div className="auth-card">
          <h3>Welcome Back 👒</h3>

          <form onSubmit={handleLogin}>
            <input
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btn-primary">Enter Ship</button>
          </form>
        </div>

        {/* SIGNUP */}
        <div className="auth-card">
          <h3>New Pirate? ⚓</h3>
          <button className="btn btn-outline" onClick={() => setShowModal(true)}>
            Join Crew
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && <SignUpModal onClose={() => setShowModal(false)} />}
    </div>
  );
}