import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import AuthLayout from '../layouts/AuthLayout'
import AppLayout from '../layouts/AppLayout'
import ProtectedRoute from './ProtectedRoute'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes — Auth layout */}
        <Route path="/login" element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }/>

        <Route path="/register" element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }/>

        {/* Protected routes — App layout */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </ProtectedRoute>
        }/>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </BrowserRouter>
  )
}