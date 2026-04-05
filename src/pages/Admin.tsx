import React, { useState } from "react";
import "./Admin.css";
import { createClient } from "../utils/supabase/client";

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
  const [adminUser, setAdminUser] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createClient();
    // Find admin user by email
    const { data: user, error: userError } = await supabase
      .from("admin")
      .select("*")
      .eq("email", username)
      .single();
    if (userError || !user) {
      setError("Admin user not found");
      setLoading(false);
      return;
    }
    // Check password (plaintext for demo; use hashing in production)
    if (user.password !== password) {
      setError("Invalid password");
      setLoading(false);
      return;
    }
    setAdminUser(user);
    setSignedIn(true);
    setError("");
    // Fetch bookings from Supabase
    const { data: bookingsData } = await supabase.from("booking").select("*");
    setBookings(bookingsData || []);
    setLoading(false);
  };

  if (!signedIn) {
    return (
      <div className="admin-login-bg">
        <div className="admin-login-abstract" aria-hidden="true"></div>
        <div className="admin-login-card">
          <div className="admin-login-avatar"></div>
          <h1 className="admin-login-title">Login</h1>
          <form className="admin-signin-form" onSubmit={handleSignIn} autoComplete="off">
            <div className="admin-form-group">
              <label htmlFor="username" className="admin-sr-only">Email</label>
              <div className="admin-input-wrapper">
                <svg className="admin-input-svg" width="20" height="20" fill="none" stroke="#1e90ff" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="4"/><path d="M6 7l6 5 6-5"/></svg>
                <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="admin@email.com" autoFocus autoComplete="username" />
              </div>
            </div>
            <div className="admin-form-group">
              <label htmlFor="password" className="admin-sr-only">Password</label>
              <div className="admin-input-wrapper">
                <svg className="admin-input-svg" width="20" height="20" fill="none" stroke="#b0b7c3" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" autoComplete="current-password" />
              </div>
            </div>
            {error && <div className="admin-error">{error}</div>}
            <button className="admin-signin-btn" type="submit" disabled={loading}>{loading ? "Signing in..." : "Login"}</button>
          </form>
          <div className="admin-login-links">
            <a href="#" className="admin-login-link">or Sign Up</a>
            <br />
            <span className="admin-login-link admin-login-link--muted">forgot password?</span>
          </div>
        </div>
      </div>
    );
  }

  // Section content rendering
  let mainContent;
  if (selectedSection === "Dashboard") {
    mainContent = (
      <>
        <div className="admin-main-header">
          <div>
            <div className="admin-welcome">Welcome back, Admin 👋</div>
            <h1 className="admin-dashboard-title">Dashboard</h1>
          </div>
          <div className="admin-profile">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Admin" className="admin-profile-img" />
            <span className="admin-profile-name">{adminUser?.email || "Admin"}</span>
          </div>
        </div>
        <div className="admin-dashboard-cards">
          <div className="admin-dashboard-cardbox gradient-card">
            <div className="admin-dashboard-cardtitle">Total Bookings</div>
            <div className="admin-dashboard-cardvalue">{bookings.length}</div>
          </div>
          <div className="admin-dashboard-cardbox gradient-card">
            <div className="admin-dashboard-cardtitle">Upcoming</div>
            <div className="admin-dashboard-cardvalue">{bookings.filter(b => new Date(b.booking_date) >= new Date()).length}</div>
          </div>
          <div className="admin-dashboard-cardbox gradient-card">
            <div className="admin-dashboard-cardtitle">Contacts</div>
            <div className="admin-dashboard-cardvalue">{bookings.length}</div>
          </div>
          <div className="admin-dashboard-cardbox gradient-card">
            <div className="admin-dashboard-cardtitle">Revenue</div>
            <div className="admin-dashboard-cardvalue">$0</div>
          </div>
        </div>
        <div className="admin-dashboard-tablecard">
          <div className="admin-dashboard-tableheader">Recent Bookings</div>
          <table className="admin-dashboard-table">
            <thead>
              <tr>
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
                  <td>{booking.user_email}</td>
                  <td>{booking.user_email}</td>
                  <td>-</td>
                  <td>{booking.booking_date}</td>
                  <td>{booking.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  } else if (selectedSection === "Bookings") {
    mainContent = (
      <div className="admin-section-card">
        <h2>All Bookings</h2>
        <table className="admin-dashboard-table">
          <thead>
            <tr>
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
                <td>{booking.user_email}</td>
                <td>{booking.user_email}</td>
                <td>-</td>
                <td>{booking.booking_date}</td>
                <td>{booking.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (selectedSection === "Contacts") {
    mainContent = (
      <div className="admin-section-card">
        <h2>Contacts</h2>
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id} style={{ marginBottom: '12px' }}>
              <strong>{booking.user_email}</strong> — {booking.user_email}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    mainContent = (
      <div className="admin-section-card">
        <h2>{selectedSection}</h2>
        <p>Section coming soon.</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-bg">
      <div className="admin-dashboard-card">
        <aside className="admin-sidebar">
          <div className="admin-sidebar-header">AdminPro</div>
          <nav className="admin-sidebar-nav">
            {sidebarLinks.map(link => (
              <div
                key={link.label}
                className={`admin-sidebar-link${selectedSection === link.label ? ' active' : ''}`}
                onClick={() => setSelectedSection(link.label)}
                tabIndex={0}
                role="button"
                aria-pressed={selectedSection === link.label}
              >
                <span>{link.label}</span>
              </div>
            ))}
          </nav>
        </aside>
        <main className="admin-main">
          {mainContent}
        </main>
      </div>
    </div>
  );
};

export default Admin;
