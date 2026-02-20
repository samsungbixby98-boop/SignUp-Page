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

  // SIGNUP VALIDATION
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.includes("@")) {
      setMsg("❌ Email must contain @");
      return;
    }

    if (form.password.length < 6 || !/\d/.test(form.password)) {
      setMsg("❌ Password must be 6+ chars & include a number");
      return;
    }

    if (form.password !== form.confirm) {
      setMsg("❌ Passwords do not match!");
      return;
    }

    setMsg("✅ Pirate Joined Successfully!");
    setTimeout(() => onClose(), 1500);
  };

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Join the Crew</h2>
          <button className="close" onClick={onClose}>✖</button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="Pirate Name"
            onChange={(e) => update("name", e.target.value)}
          />

          <input
            className="input"
            placeholder="Pirate Email"
            onChange={(e) => update("email", e.target.value)}
          />

          <input
            className="input"
            type={showPass ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => update("password", e.target.value)}
          />

          <input
            className="input"
            type={showPass ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => update("confirm", e.target.value)}
          />

          <div className="row">
            <input type="checkbox" onChange={() => setShowPass(!showPass)} />
            <label> Show Password</label>
          </div>

          {msg && <p className="message">{msg}</p>}

          <button className="btn btn-primary">Create Pirate Account</button>
        </form>
      </div>
    </div>
  );
}