import React, { createContext, useContext, useState } from 'react';
import { portfolioCompanies } from '../data/portfolioData';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [companies, setCompanies] = useState(portfolioCompanies);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('all');

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterIndustry === 'all' || company.industry === filterIndustry;
    return matchesSearch && matchesFilter;
  });

  const industries = [...new Set(companies.map(company => company.industry))];

  const value = {
    companies,
    setCompanies,
    filteredCompanies,
    selectedCompany,
    setSelectedCompany,
    activeTab,
    setActiveTab,
    searchTerm,
    setSearchTerm,
    filterIndustry,
    setFilterIndustry,
    industries
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};