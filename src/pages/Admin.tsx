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
      <div className="admin-container">
        <h1 className="admin-title">Admin Sign In</h1>
        <form className="admin-signin-form" onSubmit={handleSignIn}>
          <div className="admin-form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} autoFocus />
          </div>
          <div className="admin-form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {error && <div className="admin-error">{error}</div>}
          <button className="admin-signin-btn" type="submit">Sign In</button>
        </form>
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
