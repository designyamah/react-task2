import React from "react";
import { useAuth } from "../context/AuthContext";
import AdminDashboard from "../components/AdminDashboard";
import EditorDashboard from "../components/EditorDashboard";
import ViewerDashboard from "../components/ViewerDashboard";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const renderDashboardContent = () => {
    switch (user?.role) {
      case "Admin":
        return <AdminDashboard />;
      case "Editor":
        return <EditorDashboard />;
      case "Viewer":
        return <ViewerDashboard />;
      default:
        return <div>Error: Unknown role</div>;
    }
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="dashboard-container">
        <h1>Welcome, {user?.username}!</h1>
        {renderDashboardContent()}
      </div>
    </div>
  );
};

export default Dashboard;
