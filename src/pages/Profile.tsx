import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import "../styles/Profile.css";

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.username || "");
  const [bio, setBio] = useState("user bio.");

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="profile-container">
        <h1>User Profile</h1>

        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              {user?.username.charAt(0).toUpperCase() || "U"}
            </div>

            <div className="profile-info">
              {isEditing ? (
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="profile-name-input"
                />
              ) : (
                <h2>{displayName}</h2>
              )}
              <p className="profile-role">{user?.role}</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="profile-section">
              <h3>Biography</h3>
              {isEditing ? (
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="profile-bio-input"
                ></textarea>
              ) : (
                <p>{bio}</p>
              )}
            </div>

            <div className="profile-actions">
              {isEditing ? (
                <>
                  <button className="profile-button save" onClick={handleSave}>
                    Save
                  </button>
                  <button
                    className="profile-button cancel"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  className="profile-button edit"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
