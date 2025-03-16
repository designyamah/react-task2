import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Settings.css";

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("en");

  return (
    <div className="page-container">
      <Navbar />
      <div className="settings-container">
        <h1>System Settings</h1>
        <p className="admin-notice">
          This page is only accessible to Admin users.
        </p>

        <div className="settings-panel">
          <div className="settings-tabs">
            <button
              className={`tab ${activeTab === "general" ? "active" : ""}`}
              onClick={() => setActiveTab("general")}
            >
              General
            </button>
            <button
              className={`tab ${activeTab === "users" ? "active" : ""}`}
              onClick={() => setActiveTab("users")}
            >
              User Management
            </button>
            <button
              className={`tab ${activeTab === "security" ? "active" : ""}`}
              onClick={() => setActiveTab("security")}
            >
              Security
            </button>
          </div>

          <div className="settings-content">
            {activeTab === "general" && (
              <div className="settings-section">
                <h2>General Settings</h2>

                <div className="setting-item">
                  <div className="setting-label">
                    <span>Dark Mode</span>
                  </div>
                  <div className="setting-control">
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-label">
                    <span>Enable Notifications</span>
                  </div>
                  <div className="setting-control">
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={notifications}
                        onChange={() => setNotifications(!notifications)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-label">
                    <span>Language</span>
                  </div>
                  <div className="setting-control">
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="settings-select"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                </div>

                <div className="settings-action">
                  <button className="settings-button save">
                    Save Settings
                  </button>
                  <button className="settings-button reset">
                    Reset to Default
                  </button>
                </div>
              </div>
            )}

            {activeTab === "users" && (
              <div className="settings-section">
                <h2>User Management</h2>
                <div className="user-management">
                  <div className="user-search">
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="search-input"
                    />
                    <button className="search-button">Search</button>
                  </div>

                  <div className="user-list">
                    <div className="user-item">
                      <div className="user-info">
                        <div className="user-avatar">A</div>
                        <div className="user-details">
                          <h4>Alex Johnson</h4>
                          <span className="user-role admin">Admin</span>
                        </div>
                      </div>
                      <div className="user-actions">
                        <button className="user-action-button edit">
                          Edit
                        </button>
                        <button className="user-action-button delete">
                          Delete
                        </button>
                      </div>
                    </div>

                    <div className="user-item">
                      <div className="user-info">
                        <div className="user-avatar">S</div>
                        <div className="user-details">
                          <h4>Sara Miller</h4>
                          <span className="user-role editor">Editor</span>
                        </div>
                      </div>
                      <div className="user-actions">
                        <button className="user-action-button edit">
                          Edit
                        </button>
                        <button className="user-action-button delete">
                          Delete
                        </button>
                      </div>
                    </div>

                    <div className="user-item">
                      <div className="user-info">
                        <div className="user-avatar">J</div>
                        <div className="user-details">
                          <h4>John Davis</h4>
                          <span className="user-role viewer">Viewer</span>
                        </div>
                      </div>
                      <div className="user-actions">
                        <button className="user-action-button edit">
                          Edit
                        </button>
                        <button className="user-action-button delete">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="user-controls">
                    <button className="user-control-button add">
                      Add New User
                    </button>
                    <button className="user-control-button export">
                      Export User List
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="settings-section">
                <h2>Security Settings</h2>
                <div className="security-settings">
                  <div className="setting-item">
                    <div className="setting-label">
                      <span>Two-Factor Authentication</span>
                    </div>
                    <div className="setting-control">
                      <label className="toggle">
                        <input type="checkbox" />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>

                  <div className="setting-item">
                    <div className="setting-label">
                      <span>Password Expiry</span>
                    </div>
                    <div className="setting-control">
                      <select className="settings-select">
                        <option value="30">30 Days</option>
                        <option value="60">60 Days</option>
                        <option value="90">90 Days</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                  </div>

                  <div className="setting-item">
                    <div className="setting-label">
                      <span>Login Attempts Before Lockout</span>
                    </div>
                    <div className="setting-control">
                      <select className="settings-select">
                        <option value="3">3 Attempts</option>
                        <option value="5">5 Attempts</option>
                        <option value="10">10 Attempts</option>
                      </select>
                    </div>
                  </div>

                  <div className="setting-item">
                    <div className="setting-label">
                      <span>Session Timeout</span>
                    </div>
                    <div className="setting-control">
                      <select className="settings-select">
                        <option value="15">15 Minutes</option>
                        <option value="30">30 Minutes</option>
                        <option value="60">1 Hour</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                  </div>

                  <div className="settings-action">
                    <button className="settings-button save">
                      Save Security Settings
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
