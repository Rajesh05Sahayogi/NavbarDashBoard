import React from 'react';
import { Route } from 'react-router-dom';


const routes = () => {
  return (
    <>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Protected Routes */}
      <Route
        path="/sales"
        element={
          <ProtectedRoute
            element={SalesPage}
            allowedRoles={['sales']}
            userRole={userRole}
          />
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute
            element={AdminPage}
            allowedRoles={['admin']}
            userRole={userRole}
          />
        }
      />

      {/* Redirect unknown paths */}
      <Route path="*" element={<Navigate to="/" />} />
    </>
  );
};

export default routes;
