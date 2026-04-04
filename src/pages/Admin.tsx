import React, { useState } from "react";
import "./Admin.css";

// Mock booking data (replace with Supabase fetch later)
const bookings = [
  { id: 1, name: "Alice Smith", email: "alice@example.com", phone: "555-1234", date: "2026-04-01", service: "Consultation" },
  { id: 2, name: "Bob Jones", email: "bob@example.com", phone: "555-5678", date: "2026-04-02", service: "Therapy" },
  { id: 3, name: "Charlie Lee", email: "charlie@example.com", phone: "555-9012", date: "2026-04-03", service: "Coaching" },
];

const ADMIN_USER = "admin";
const ADMIN_PASS = "password";

const Admin: React.FC = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setSignedIn(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  if (!signedIn) {
    return (
      <div className="admin-login-bg">
        <div className="admin-login-abstract" aria-hidden="true"></div>
        <div className="admin-login-card">
          <div className="admin-login-avatar"></div>
          <h1 className="admin-login-title">Login</h1>
          <form className="admin-signin-form" onSubmit={handleSignIn}>
            <div className="admin-form-group">
              <label htmlFor="username" className="admin-sr-only">Email</label>
              <div className="admin-input-wrapper">
                <span className="admin-input-icon">📧</span>
                <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Email" autoFocus />
              </div>
            </div>
            <div className="admin-form-group">
              <label htmlFor="password" className="admin-sr-only">Password</label>
              <div className="admin-input-wrapper">
                <span className="admin-input-icon">🔒</span>
                <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
              </div>
            </div>
            {error && <div className="admin-error">{error}</div>}
            <button className="admin-signin-btn" type="submit">Login</button>
          </form>
          <div className="admin-login-links">
            <a href="#" className="admin-login-link">or Sign Up</a>
            <br />
            <a href="#" className="admin-login-link admin-login-link--muted">forgot password?</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.date}</td>
                <td>{booking.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
