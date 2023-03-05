import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import AppProviders from 'containers/AppProviders/AppProviders';
import Home from 'views/Home';
import ChatSection from './ChatSection';
import './App.scss'

function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<ChatSection />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </AppProviders>
  );
}

export default App;
