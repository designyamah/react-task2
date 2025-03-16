# React + TypeScript + Vite

# react-task2

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
