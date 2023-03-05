import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import AppProviders from 'containers/AppProviders/AppProviders';
import Home from 'views/Home';
import ChatSection from './ChatSection';
import './App.scss'
import LoginContainer from 'containers/LoginContainter/LoginContainer';
import HelpSection from 'containers/HelpSection/HelpSection'
import Dashboard from './Dashboard';

function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<ChatSection />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/help" element={<HelpSection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </AppProviders>
  );
}

export default App;
