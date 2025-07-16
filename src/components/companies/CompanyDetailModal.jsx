import React, { useState } from 'react';
import { 
  X, Building2, Globe, Linkedin, Mail, Download, 
  Users, Calculator, TrendingUp, Award, Target
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ComposedChart,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

// Enhanced Company Detail Modal with comprehensive charts and data
const CompanyDetailModal = ({ company, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!company) return null;

  const downloadComprehensiveReport = () => {
    const reportData = {
      companyOverview: {
        name: company.name,
        industry: company.industry,
        sector: company.sector,
        founded: company.founded,
        headquarters: company.headquarters,
        employees: company.employees,
        website: company.website,
        status: company.status,
        stage: company.stage
      },
      
      valuation: {
        current: company.valuation.current,
        history: company.valuation.history,
        totalFunding: company.totalFunding,
        fundingRounds: company.fundingRounds,
        leadInvestors: company.leadInvestors
      },
      
      financials: company.financials,
      
      keyMetrics: company.keyMetrics,
      
      team: company.team,
      
      marketAnalysis: company.marketAnalysis,
      
      riskFactors: company.riskFactors,
      
      quarterlyPerformance: company.quarterlyData,
      
      reportMetadata: {
        generatedAt: new Date().toISOString(),
        generatedBy: 'Portfolio Dashboard',
        version: '2.0'
      }
    };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(reportData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${company.name}_Comprehensive_Report_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 rounded-xl object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}&background=3B82F6&color=ffffff&size=64`;
                }}
              />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{company.name}</h2>
                <p className="text-slate-600">{company.description}</p>
                <div className="flex items-center space-x-3 mt-2">
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                    {company.status}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {company.stage}
                  </span>
                  <span className="text-sm text-slate-500">{company.industry}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={downloadComprehensiveReport}
                className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                <Download size={16} />
                <span>Download Report</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          
          <div className="flex space-x-1 mt-6">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'financials', label: 'Financials' },
              { id: 'analytics', label: 'Analytics' },
              { id: 'team', label: 'Team' },
              { id: 'market', label: 'Market Analysis' },
              { id: 'metrics', label: 'Key Metrics' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>        
        
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-500">Industry</label>
                      <p className="font-medium">{company.industry}</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Sector</label>
                      <p className="font-medium">{company.sector}</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Founded</label>
                      <p className="font-medium">{company.founded}</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Employees</label>
                      <p className="font-medium">{company.employees}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-500">Headquarters</label>
                    <p className="font-medium">{company.headquarters}</p>
                  </div>
                  <div>
                    <label className="text-sm text-slate-500">Website</label>
                    <a href={company.website} target="_blank" rel="noopener noreferrer" 
                       className="font-medium text-blue-600 hover:underline">{company.website}</a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Investment Summary</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-500">Current Valuation</label>
                      <p className="font-bold text-xl text-green-600">{company.valuation.current}</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Total Funding</label>
                      <p className="font-bold text-xl text-blue-600">{company.totalFunding}</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Stage</label>
                      <p className="font-medium">{company.stage}</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Users</label>
                      <p className="font-medium">{company.users}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-500">Lead Investors</label>
                    <p className="font-medium">{company.leadInvestors?.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'financials' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-4 text-green-600">Revenue Metrics</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-slate-500">Total Revenue (FY24)</label>
                      <p className="text-2xl font-bold text-green-600">₹{company.financials?.fy24?.totalRevenue} Cr</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Revenue Growth</label>
                      <p className="text-xl font-semibold text-emerald-600">+{company.financials?.fy24?.previousYear?.revenueGrowth}%</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Gross Profit</label>
                      <p className="text-lg font-semibold">₹{company.financials?.fy24?.grossProfit} Cr</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-4 text-red-600">Profitability</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-slate-500">Net P&L (FY24)</label>
                      <p className={`text-2xl font-bold ${company.financials?.fy24?.netProfitLoss > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{company.financials?.fy24?.netProfitLoss} Cr
                      </p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">EBITDA</label>
                      <p className={`text-xl font-semibold ${company.financials?.fy24?.ebitda > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{company.financials?.fy24?.ebitda} Cr
                      </p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">EBITDA Margin</label>
                      <p className={`text-lg font-semibold ${company.financials?.fy24?.ebitdaMargin > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {company.financials?.fy24?.ebitdaMargin}%
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-4 text-blue-600">Efficiency Ratios</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-slate-500">Current Ratio</label>
                      <p className="text-xl font-semibold text-blue-600">{company.keyMetrics?.currentRatio}</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Cash Conversion Cycle</label>
                      <p className="text-lg font-semibold">{company.keyMetrics?.cashConversionCycle} days</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Debt to Equity</label>
                      <p className="text-lg font-semibold">{company.keyMetrics?.debtToEquity}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue Streams Breakdown */}
              {company.financials?.fy24?.revenueStreams && (
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4">Revenue Streams Breakdown</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={Object.entries(company.financials.fy24.revenueStreams).map(([name, value], index) => ({
                          name,
                          value,
                          color: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'][index]
                        }))}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {Object.entries(company.financials.fy24.revenueStreams).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'][index]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `₹${value} Cr`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-8">
              {/* Quarterly Performance Chart */}
              {company.quarterlyData && (
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4">Quarterly Performance Trends</h4>
                  <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart data={company.quarterlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="quarter" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="revenue" fill="#10B981" name="Revenue (₹ Cr)" />
                      <Line yAxisId="left" type="monotone" dataKey="profit" stroke="#EF4444" name="Profit (₹ Cr)" strokeWidth={3} />
                      <Line yAxisId="right" type="monotone" dataKey="users" stroke="#3B82F6" name="Users (M)" strokeWidth={3} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              )}

              {/* Valuation History */}
              {company.valuation?.history && (
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4">Valuation History</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={company.valuation.history}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`₹${value} Cr`, 'Valuation']} />
                      <Area type="monotone" dataKey="value" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}

              {/* Financial Ratios Radar Chart */}
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Financial Health Radar</h4>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={[
                    {
                      subject: 'Revenue Growth',
                      A: Math.min(100, (company.keyMetrics?.revenueGrowth || 0) / 3),
                      fullMark: 100
                    },
                    {
                      subject: 'Gross Margin',
                      A: Math.max(0, Math.min(100, company.keyMetrics?.grossMargin || 0)),
                      fullMark: 100
                    },
                    {
                      subject: 'Liquidity',
                      A: Math.min(100, (company.keyMetrics?.currentRatio || 0) * 50),
                      fullMark: 100
                    },
                    {
                      subject: 'Efficiency',
                      A: Math.max(0, 100 - (company.keyMetrics?.cashConversionCycle || 0) / 2),
                      fullMark: 100
                    },
                    {
                      subject: 'Leverage',
                      A: Math.max(0, 100 - (company.keyMetrics?.debtToEquity || 0) * 100),
                      fullMark: 100
                    }
                  ]}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Company" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
          
          {activeTab === 'team' && (
            <div>
              <h3 className="text-lg font-semibold mb-6">Leadership Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {company.team?.map((member, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-slate-900">{member.name}</h4>
                        <p className="text-blue-600 font-medium">{member.designation}</p>
                        <p className="text-sm text-slate-600 mt-2">{member.description}</p>
                        <div className="flex items-center space-x-4 mt-3">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {member.experience}
                          </span>
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" 
                             className="text-blue-600 hover:text-blue-800">
                            <Linkedin size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'market' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-4">Market Position</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-slate-500">Market Size</label>
                      <p className="text-xl font-bold text-blue-600">{company.marketAnalysis?.marketSize}</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Market Share</label>
                      <p className="text-lg font-semibold">{company.marketAnalysis?.marketShare}</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">TAM Size</label>
                      <p className="text-lg font-semibold">{company.marketAnalysis?.tamSize}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-4">Competitive Landscape</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-slate-500">Direct Competitors</label>
                      <p className="text-sm font-medium">{company.marketAnalysis?.competitorCount} companies</p>
                    </div>
                    <div className="space-y-1">
                      {company.marketAnalysis?.directCompetitors?.slice(0, 5)?.map((competitor, index) => (
                        <span key={index} className="inline-block bg-white px-2 py-1 rounded text-xs mr-1 mb-1">
                          {competitor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {company.marketAnalysis?.competitiveAdvantages && (
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4">Competitive Advantages</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {company.marketAnalysis.competitiveAdvantages.map((advantage, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                        <Target className="w-5 h-5 text-emerald-600" />
                        <span className="text-sm font-medium text-emerald-800">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'metrics' && (
            <div>
              <h3 className="text-lg font-semibold mb-6">All Key Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(company.keyMetrics || {}).map(([key, value]) => (
                  <div key={key} className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm text-slate-500 capitalize mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    <p className="text-xl font-bold text-slate-900">
                      {typeof value === 'string' ? value : `${value}${
                        key.includes('Rate') || key.includes('Margin') || key.includes('Growth') ? '%' : 
                        key.includes('Days') ? ' days' : 
                        key.includes('Ratio') ? '' : ''
                      }`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailModal;