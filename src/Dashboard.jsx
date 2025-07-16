import React from 'react';
import { PortfolioProvider } from './contexts/PortfolioContext.jsx';
import { useAuth } from './hooks/useAuth';
import LoginScreen from './components/auth/LoginScreen';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import MainContent from './components/MainContent';

const Dashboard = () => {
  const { isLoggedIn, login, logout } = useAuth();

  if (!isLoggedIn) {
    return <LoginScreen onLogin={login} />;
  }

  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header onLogout={logout} />
        <div className="flex">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </PortfolioProvider>
  );
};

export default Dashboard;