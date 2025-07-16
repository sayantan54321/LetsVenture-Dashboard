import { useState } from 'react';
import { LOGIN_CREDENTIALS } from '../data/portfolioData';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === LOGIN_CREDENTIALS.email && password === LOGIN_CREDENTIALS.password) {
          setIsLoggedIn(true);
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return { 
    isLoggedIn, 
    login, 
    logout 
  };
};