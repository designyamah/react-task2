const AdminDashboard: React.FC = () => {
  return (
    <div className="dashboard-component admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="admin-controls">
        <div className="control-card">
          <h3>User Management</h3>
          <p>Manage user accounts and permissions</p>
          <button className="dashboard-button">Manage Users</button>
        </div>
        <div className="control-card">
          <h3>System Settings</h3>
          <p>Configure global application settings</p>
          <button className="dashboard-button">System Settings</button>
        </div>
        <div className="control-card">
          <h3>Analytics</h3>
          <p>View detailed analytics and reports</p>
          <button className="dashboard-button">View Analytics</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
