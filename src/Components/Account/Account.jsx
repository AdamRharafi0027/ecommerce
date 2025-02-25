import { useState } from "react";
import { PersonCircle, Envelope, Gear, Lock, BoxArrowRight } from "react-bootstrap-icons";
import "./Account.css";

const Account = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    joined: "January 2023",
  });

  return (
    <section className="account-container">
      <div className="profile-card">
        <PersonCircle className="profile-icon" />
        <h2>{user.name}</h2>
        <p><Envelope /> {user.email}</p>
        <p>Joined: {user.joined}</p>
      </div>

      <div className="account-options">
        <button className="account-btn"><Gear /> Account Settings</button>
        <button className="account-btn"><Lock /> Change Password</button>
        <button className="logout-btn"><BoxArrowRight /> Logout</button>
      </div>
    </section>
  );
};

export default Account;
