# React + TypeScript + Vite

# react-task2

Let me continue with the remaining CSS styles for our React TypeScript dashboard application:

```typescript
.profile-role {
  font-size: 0.9rem;
  color: #7f8c8d;
  background-color: #ecf0f1;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  display: inline-block;
}

.profile-section {
  margin-bottom: 1.5rem;
}

.profile-section h3 {
  margin-bottom: 0.75rem;
  color: #34495e;
  font-size: 1.1rem;
}

.profile-name-input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.profile-bio-input {
  width: 100%;
  height: 120px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  font-family: inherit;
}

.profile-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.profile-button {
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  border: none;
  transition: background-color 0.3s;
}

.profile-button.edit {
  background-color: #3498db;
  color: white;
}

.profile-button.edit:hover {
  background-color: #2980b9;
}

.profile-button.save {
  background-color: #2ecc71;
  color: white;
}

.profile-button.save:hover {
  background-color: #27ae60;
}

.profile-button.cancel {
  background-color: #e74c3c;
  color: white;
}

.profile-button.cancel:hover {
  background-color: #c0392b;
}

// src/styles/SettingsPage.css
.settings-container {
  padding: 2rem;
  flex-grow: 1;
}

.settings-container h1 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.admin-notice {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.settings-panel {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.settings-tabs {
  display: flex;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.tab {
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  font-weight: 500;
  color: #7f8c8d;
  cursor: pointer;
  transition: all 0.3s;
}

.tab:hover {
  background-color: #ecf0f1;
}

.tab.active {
  background-color: white;
  color: #3498db;
  border-bottom: 2px solid #3498db;
}

.settings-content {
  padding: 1.5rem;
}

.settings-section h2 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
  font-size: 1.2rem;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #ecf0f1;
}

.setting-label {
  font-weight: 500;
  color: #34495e;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

.toggle input:checked + .toggle-slider {
  background-color: #3498db;
}

.toggle input:checked + .toggle-slider:before {
  transform: translateX(26px);
}

.settings-select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 150px;
}

.settings-action {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.settings-button {
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  border: none;
  transition: background-color 0.3s;
}

.settings-button.save {
  background-color: #3498db;
  color: white;
}

.settings-button.save:hover {
  background-color: #2980b9;
}

.settings-button.reset {
  background-color: #95a5a6;
  color: white;
}

.settings-button.reset:hover {
  background-color: #7f8c8d;
}

/* User Management Styles */
.user-search {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.search-input {
  flex-grow: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.user-list {
  margin-bottom: 1.5rem;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ecf0f1;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 1rem;
}

.user-details h4 {
  margin-bottom: 0.25rem;
}

.user-role {
  font-size: 0.8rem;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
  display: inline-block;
}

.user-role.admin {
  background-color: #e74c3c;
  color: white;
}

.user-role.editor {
  background-color: #f39c12;
  color: white;
}

.user-role.viewer {
  background-color: #3498db;
  color: white;
}

.user-actions {
  display: flex;
  gap: 0.5rem;
}

.user-action-button {
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  border: none;
}

.user-action-button.edit {
  background-color: #f1c40f;
  color: #34495e;
}

.user-action-button.delete {
  background-color: #e74c3c;
  color: white;
}

.user-controls {
  display: flex;
  justify-content: space-between;
}

.user-control-button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
}

.user-control-button.add {
  background-color: #2ecc71;
  color: white;
}

.user-control-button.export {
  background-color: #3498db;
  color: white;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .admin-controls,
  .editor-controls,
  .viewer-controls {
    grid-template-columns: 1fr;
  }

  .navbar {
    flex-direction: column;
    padding: 1rem;
  }

  .navbar-logo,
  .navbar-links,
  .navbar-user {
    margin-bottom: 1rem;
    width: 100%;
    justify-content: center;
  }

  .profile-header {
    flex-direction: column;
    text-align: center;
  }

  .profile-avatar {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .settings-tabs {
    flex-direction: column;
  }

  .setting-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .setting-control {
    margin-top: 0.5rem;
  }

  .user-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .user-actions {
    margin-top: 1rem;
  }
}

// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

Now I'll provide a detailed explanation of the complete application I've built for you:

## Application Overview

I've created a multi-page React TypeScript application that demonstrates role-based access control with protected routes. The application includes:

1. **User Authentication System**: A simple authentication system where users select their role (Admin, Editor, or Viewer) at login.

2. **Role-Based Authorization**: Routes are protected based on authentication status and user roles.

3. **Conditional Rendering**: The dashboard displays different content based on the user's role.

4. **Navigation System**: A navbar that shows only the routes available to the current user.

## Project Structure

The application is organized into several key components:

### 1. Context and State Management

The `AuthContext.tsx` file implements a context API to manage authentication state across the application. It provides:

- User information storage (username and role)
- Login and logout functions
- Helper methods to check authentication status and admin privileges

This context is accessible throughout the application, making it easy to check user permissions and render appropriate content.

### 2. Route Protection

The `ProtectedRoute.tsx` component provides two levels of protection:

- Basic protection that requires users to be logged in
- Admin-specific protection that requires the user to have the Admin role

When a user tries to access a restricted route, they are automatically redirected to the login page or to the dashboard (if they're authenticated but lack admin permissions).

### 3. Page Components

I've created several page components:

- **LoginPage**: Where users enter their username and select their role
- **DashboardPage**: Renders different content based on the user's role
- **ProfilePage**: Shows user profile information and allows editing
- **SettingsPage**: Admin-only page with system settings (only visible to admins)

### 4. Role-Based Dashboard Components

For the dashboard, I've created three different components based on user roles:

- **AdminDashboard**: Shows admin controls like user management and system settings
- **EditorDashboard**: Shows content editing tools and publishing controls
- **ViewerDashboard**: Shows read-only reports and visualization placeholders

### 5. Routing Configuration

In `App.tsx`, the routing is set up using React Router with protected routes. The route structure includes:

- Public routes (/login)
- Protected routes that require authentication (/dashboard, /profile)
- Protected routes that require admin privileges (/settings)

### 6. CSS Styling

I've created a comprehensive set of CSS files to style each component:

- Core styles in App.css
- Component-specific styles in separate files (LoginPage.css, DashboardPage.css, etc.)
- Responsive design with media queries to ensure the app looks good on all devices

## How to Use This Application

1. **Start at the Login Page**: Enter a username and select a role (Admin, Editor, or Viewer)
2. **Navigate the Dashboard**: After login, you'll see different dashboard content based on your role
3. **Access the Profile Page**: All authenticated users can view their profile
4. **Admin Settings**: Only users with the Admin role can access the settings page
5. **Logout**: Click the logout button to end your session

## Key Technical Features

1. **TypeScript Integration**: typing throughout the application for better code quality
2. **Context API**: Used for global state management instead of prop drilling
3. **React Router**: For declarative routing with protected routes
4. **Conditional Rendering**: Components adapt based on user roles
5. **CSS Styling**: Clean and responsive design
