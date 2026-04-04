import React from "react";
import "./Admin.css";

// Mock booking data (replace with Supabase fetch later)
const bookings = [
  { id: 1, name: "Alice Smith", email: "alice@example.com", date: "2026-04-01", service: "Consultation" },
  { id: 2, name: "Bob Jones", email: "bob@example.com", date: "2026-04-02", service: "Therapy" },
  { id: 3, name: "Charlie Lee", email: "charlie@example.com", date: "2026-04-03", service: "Coaching" },
];

const Admin: React.FC = () => {
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
