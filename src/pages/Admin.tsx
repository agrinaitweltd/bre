import React, { useState } from "react";
import "./Admin.css";

const sidebarLinks = [
  { label: "Dashboard" },
  { label: "Bookings" },
  { label: "Contacts" },
  { label: "Statistics" },
  { label: "Calendar" },
  { label: "Finance" },
];

const Admin: React.FC = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      setSignedIn(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  if (!signedIn) {
    return (
      <div className="admin-login-bg">
        <div className="admin-login-card">
          <h1 className="admin-login-title">Luxury Admin Login</h1>
          <form className="admin-signin-form" onSubmit={handleSignIn}>
            <div className="admin-form-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="admin-form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="admin-error">{error}</div>}
            <button className="admin-signin-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-bg">
      <div className="admin-dashboard-card">
        <aside className="admin-sidebar">
          <div className="admin-sidebar-header">Luxury Admin</div>
          <nav className="admin-sidebar-nav">
            {sidebarLinks.map((link) => (
              <div
                key={link.label}
                className={`admin-sidebar-link${
                  selectedSection === link.label ? " active" : ""
                }`}
                onClick={() => setSelectedSection(link.label)}
              >
                {link.label}
              </div>
            ))}
          </nav>
        </aside>
        <main className="admin-main">
          <h1>Welcome to the Luxury Admin Dashboard</h1>
          <p>No data available.</p>
        </main>
      </div>
    </div>
  );
};

export default Admin;
