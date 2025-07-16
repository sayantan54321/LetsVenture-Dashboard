import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext.jsx';
import { usePortfolioMetrics } from '../hooks/usePortfolioMetrics';
import DashboardTab from './dashboard/DashboardTab';
import CompaniesTab from './companies/CompaniesTab';
import AnalyticsTab from './analytics/AnalyticsTab';
import PortfolioTab from './portfolio/PortfolioTab';
import FinancialsTab from './financials/FinancialsTab';
import PerformanceTab from './performance/PerformanceTab';
import RiskAnalysisTab from './risk/RiskAnalysisTab';
import DocumentsTab from './documents/DocumentsTab';
import CompanyDetailModal from './companies/CompanyDetailModal';

const MainContent = () => {
  const { 
    companies, 
    activeTab, 
    selectedCompany, 
    setSelectedCompany,
    filteredCompanies
  } = usePortfolio();

  const metrics = usePortfolioMetrics(companies);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab companies={companies} metrics={metrics} />;
      case 'companies':
        return <CompaniesTab companies={filteredCompanies} onSelectCompany={setSelectedCompany} />;
      case 'analytics':
        return <AnalyticsTab companies={companies} />;
      case 'portfolio':
        return <PortfolioTab companies={companies} metrics={metrics} />;
      case 'financials':
        return <FinancialsTab companies={companies} />;
      case 'performance':
        return <PerformanceTab companies={companies} />;
      case 'risk':
        return <RiskAnalysisTab companies={companies} />;
      case 'documents':
        return <DocumentsTab companies={companies} />;
      default:
        return <DashboardTab companies={companies} metrics={metrics} />;
    }
  };

  return (
    <div className="flex-1 p-6">
      {renderContent()}
      
      {/* Company Detail Modal */}
      {selectedCompany && (
        <CompanyDetailModal 
          company={selectedCompany} 
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </div>
  );
};

export default MainContent;