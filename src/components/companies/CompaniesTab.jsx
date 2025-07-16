import React, { useState } from 'react';
import { 
  Building2, Plus, TrendingUp, TrendingDown, Eye, Calendar, Users, 
  ChevronDown, ChevronUp, Globe, Linkedin, ExternalLink, Target,
  IndianRupee, Download
} from 'lucide-react';

// Enhanced Company Card Component
const EnhancedCompanyCard = ({ company, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Acquired': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'IPO': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getStageColor = (stage) => {
    switch (stage) {
      case 'Seed': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Series A': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Series B': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const latestFinancials = company.financials?.fy24 || {};

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="relative group">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-16 h-16 rounded-xl object-cover border border-slate-200 group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}&background=3B82F6&color=ffffff&size=64`;
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{company.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(company.status)}`}>
                    {company.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStageColor(company.stage)}`}>
                    {company.stage}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">{company.description}</p>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Building2 size={14} />
                    <span>{company.industry}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>Founded {company.founded}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>{company.employees} employees</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-2xl font-bold text-slate-900 mb-1">{company.valuation.current}</div>
                <div className="text-sm text-slate-500">Current Valuation</div>
              </div>
              
              {latestFinancials.totalRevenue && (
                <div className="text-right">
                  <div className="text-lg font-bold text-emerald-600 mb-1">₹{latestFinancials.totalRevenue} Cr</div>
                  <div className="text-sm text-slate-500">Revenue (FY24)</div>
                </div>
              )}

              {company.keyMetrics?.revenueGrowth && (
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600 mb-1">+{company.keyMetrics.revenueGrowth}%</div>
                  <div className="text-sm text-slate-500">Growth Rate</div>
                </div>
              )}
              
              <div className="flex flex-col space-y-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(company);
                  }}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Eye size={16} />
                </button>
                {isExpanded ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
              </div>
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              
              {/* Financial Highlights */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 flex items-center space-x-2">
                  <IndianRupee size={16} />
                  <span>Financial Highlights</span>
                </h4>
                {latestFinancials && (
                  <div className="space-y-3">
                    {latestFinancials.totalRevenue && (
                      <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                        <span className="text-sm text-slate-600">Total Revenue</span>
                        <span className="font-semibold text-emerald-600">₹{latestFinancials.totalRevenue} Cr</span>
                      </div>
                    )}
                    {latestFinancials.netProfitLoss && (
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm text-slate-600">Net P&L</span>
                        <span className={`font-semibold ${latestFinancials.netProfitLoss > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          ₹{latestFinancials.netProfitLoss} Cr
                        </span>
                      </div>
                    )}
                    {latestFinancials.previousYear?.revenueGrowth && (
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm text-slate-600">Revenue Growth</span>
                        <span className="font-semibold text-blue-600">+{latestFinancials.previousYear.revenueGrowth}%</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Key Metrics */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 flex items-center space-x-2">
                  <Target size={16} />
                  <span>Key Metrics</span>
                </h4>
                <div className="space-y-3">
                  {Object.entries(company.keyMetrics || {}).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-semibold text-slate-900">
                        {typeof value === 'string' ? value : `${value}${key.includes('Rate') || key.includes('Margin') || key.includes('Growth') ? '%' : ''}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 flex items-center space-x-2">
                  <Users size={16} />
                  <span>Leadership Team</span>
                </h4>
                <div className="space-y-3">
                  {company.team?.slice(0, 3).map((member, index) => (
                    <div key={index} className="p-3 bg-slate-50 rounded-lg">
                      <p className="font-medium text-slate-900 text-sm">{member.name}</p>
                      <p className="text-xs text-slate-600">{member.designation}</p>
                      <p className="text-xs text-slate-500 mt-1">{member.experience}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market & Investment Info */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 flex items-center space-x-2">
                  <TrendingUp size={16} />
                  <span>Investment Info</span>
                </h4>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-slate-600">Total Funding</p>
                    <p className="font-semibold text-blue-600">{company.totalFunding}</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-slate-600">Users/Customers</p>
                    <p className="font-semibold text-purple-600">{company.users}</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-slate-600">Market Share</p>
                    <p className="font-semibold text-orange-600">{company.marketAnalysis?.marketShare || 'N/A'}</p>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-slate-600">Lead Investor</p>
                    <p className="font-semibold text-emerald-600 text-xs">{company.leadInvestors?.[0]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <a href={company.website} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                  <Globe size={16} />
                  <span>Website</span>
                  <ExternalLink size={12} />
                </a>
                <a href={company.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} />
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => onSelect(company)}
                  className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Detailed View
                </button>
                <button 
                  onClick={() => {
                    const reportData = {
                      companyName: company.name,
                      valuation: company.valuation.current,
                      revenue: company.financials?.fy24?.totalRevenue || 'N/A',
                      growth: company.financials?.fy24?.previousYear?.revenueGrowth || 'N/A',
                      stage: company.stage,
                      employees: company.employees,
                      generatedAt: new Date().toLocaleString()
                    };
                    
                    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(reportData, null, 2));
                    const downloadAnchorNode = document.createElement('a');
                    downloadAnchorNode.setAttribute("href", dataStr);
                    downloadAnchorNode.setAttribute("download", `${company.name}_Quick_Report.json`);
                    document.body.appendChild(downloadAnchorNode);
                    downloadAnchorNode.click();
                    downloadAnchorNode.remove();
                  }}
                  className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Download Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Enhanced Companies Tab Component
const CompaniesTab = ({ companies, onSelectCompany }) => {
  const [sortBy, setSortBy] = useState('valuation');
  const [sortOrder, setSortOrder] = useState('desc');
  const [filterStage, setFilterStage] = useState('all');

  const stages = [...new Set(companies.map(company => company.stage))];

  const filteredAndSortedCompanies = companies
    .filter(company => filterStage === 'all' || company.stage === filterStage)
    .sort((a, b) => {
      let aVal, bVal;
      switch (sortBy) {
        case 'valuation':
          aVal = parseFloat(a.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', ''));
          bVal = parseFloat(b.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', ''));
          break;
        case 'revenue':
          aVal = a.financials?.fy24?.totalRevenue || 0;
          bVal = b.financials?.fy24?.totalRevenue || 0;
          break;
        case 'growth':
          aVal = a.keyMetrics?.revenueGrowth || 0;
          bVal = b.keyMetrics?.revenueGrowth || 0;
          break;
        case 'employees':
          aVal = parseInt(a.employees);
          bVal = parseInt(b.employees);
          break;
        default:
          return 0;
      }
      return sortOrder === 'desc' ? bVal - aVal : aVal - bVal;
    });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Portfolio Companies</h1>
        <p className="text-slate-600 mt-2">Comprehensive view of all portfolio companies with detailed financials</p>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Sort By</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-slate-200 rounded-lg px-3 py-2"
              >
                <option value="valuation">Valuation</option>
                <option value="revenue">Revenue</option>
                <option value="growth">Growth Rate</option>
                <option value="employees">Team Size</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Order</label>
              <select 
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-slate-200 rounded-lg px-3 py-2"
              >
                <option value="desc">High to Low</option>
                <option value="asc">Low to High</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Filter by Stage</label>
              <select 
                value={filterStage}
                onChange={(e) => setFilterStage(e.target.value)}
                className="border border-slate-200 rounded-lg px-3 py-2"
              >
                <option value="all">All Stages</option>
                {stages.map(stage => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-sm text-slate-500">
            Showing {filteredAndSortedCompanies.length} of {companies.length} companies
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredAndSortedCompanies.map((company) => (
          <EnhancedCompanyCard 
            key={company.id} 
            company={company} 
            onSelect={onSelectCompany}
          />
        ))}
      </div>
    </div>
  );
};

export default CompaniesTab;