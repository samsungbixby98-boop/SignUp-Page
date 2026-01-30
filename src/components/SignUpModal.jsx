import { useState } from "react";

export default function SignUpModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [msg, setMsg] = useState("");

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      setMsg("❌ Password must be at least 6 characters!");
      return;
    }

    if (form.password !== form.confirm) {
      setMsg("❌ Passwords do not match!");
      return;
    }

    setMsg("✅ Pirate Joined Successfully!");
    setTimeout(() => onClose(), 1200);
  };

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Join the Crew</h2>
          <button className="close" onClick={onClose}>
            ✖
          </button>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="Pirate Name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
          />

          <input
            className="input"
            type="email"
            placeholder="Pirate Email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            required
          />

          <input
            className="input"
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            required
          />

          <input
            className="input"
            type={showPass ? "text" : "password"}
            placeholder="Confirm Password"
            value={form.confirm}
            onChange={(e) => update("confirm", e.target.value)}
            required
          />

          <div className="row">
            <input
              type="checkbox"
              id="showpass"
              onChange={() => setShowPass(!showPass)}
            />
            <label htmlFor="showpass">Show Password</label>
          </div>

          {msg && <p className="message">{msg}</p>}

          <button className="btn btn-primary" type="submit">
            Create Pirate Account
          </button>

          <p className="hint">⚠️ Frontend only demo (no backend)</p>
        </form>
      </div>
    </div>
  );
}
