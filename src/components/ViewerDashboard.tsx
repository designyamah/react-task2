const ViewerDashboard: React.FC = () => {
  return (
    <div className="dashboard-component viewer-dashboard">
      <h2>Reports Dashboard</h2>
      <div className="viewer-controls">
        <div className="report-card">
          <h3>Monthly Performance</h3>
          <p>View-only report of monthly performance metrics</p>
          <div className="report-preview">
            <div className="chart-placeholder"></div>
            <p className="report-data">Viewing data for March 2025</p>
          </div>
        </div>
        <div className="report-card">
          <h3>Project Status</h3>
          <p>View current project statuses and timelines</p>
          <div className="report-preview">
            <ul className="status-list">
              <li>
                <span className="status-dot complete"></span> Project Alpha:
                Complete
              </li>
              <li>
                <span className="status-dot in-progress"></span> Project Beta:
                In Progress
              </li>
              <li>
                <span className="status-dot planned"></span> Project Gamma:
                Planned
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewerDashboard;
