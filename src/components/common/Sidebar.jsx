import React from 'react';
import { 
  LayoutDashboard, Building2, BarChart3, PieChart, FileBarChart, 
  Award, Shield, FileText 
} from 'lucide-react';
import { usePortfolio } from '../../contexts/PortfolioContext.jsx';
import { usePortfolioMetrics } from '../../hooks/usePortfolioMetrics';

const Sidebar = () => {
  const { companies, activeTab, setActiveTab } = usePortfolio();
  const metrics = usePortfolioMetrics(companies);

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', active: true },
    { id: 'companies', icon: Building2, label: 'Companies', count: companies.length },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'portfolio', icon: PieChart, label: 'Portfolio' },
    { id: 'financials', icon: FileBarChart, label: 'Financial Reports' },
    { id: 'performance', icon: Award, label: 'Performance' },
    { id: 'risk', icon: Shield, label: 'Risk Analysis' },
    { id: 'documents', icon: FileText, label: 'Documents' }
  ];

  return (
    <div className="w-72 bg-white/80 backdrop-blur-lg border-r border-slate-200 min-h-screen">
      <div className="p-6">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.count && (
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Portfolio Summary */}
        <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-200">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Portfolio Health</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-600">Total Value</span>
              <span className="text-sm font-bold text-emerald-600">₹{metrics.totalValue.toFixed(0)} Cr</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-600">Companies</span>
              <span className="text-sm font-bold text-blue-600">{metrics.totalCompanies}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-600">Avg Growth</span>
              <span className="text-sm font-bold text-purple-600">{metrics.avgGrowth.toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;