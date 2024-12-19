import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {AuthProvider} from './context/authContext';

import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage';
import Tareas from './pages/Tareas';
import TaskFormPage from './pages/TaskFormPage';
import Profile from './pages/Profile';

// rutas protegidas
import ProtectedRoute from './ProtectedRoute';
import { TaskProvider } from './context/TareasContext';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              {/* rutas protegidas  */}
              <Route element={<ProtectedRoute />}>
                <Route path='/tareas' element={<Tareas />} />
                <Route path='/add-tareas' element={<TaskFormPage />} />
                <Route path='/tareas/:id' element={<TaskFormPage />} />
                <Route path='/perfil' element={<Profile />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TaskProvider>
      </AuthProvider>
    </>
  )
}

export default App
