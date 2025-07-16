import React from 'react';
import { 
  Shield, AlertTriangle, Clock, TrendingDown
} from 'lucide-react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid
} from 'recharts';
import { calculateRiskScore } from '../../utils/calculations';

// Enhanced Risk Analysis Tab
const RiskAnalysisTab = ({ companies }) => {
  const riskAssessments = companies.map(company => ({
    ...company,
    riskScore: calculateRiskScore(company),
    riskLevel: calculateRiskScore(company) > 70 ? 'High' : 
               calculateRiskScore(company) > 40 ? 'Medium' : 'Low',
    keyRisks: [
      company.financials?.fy24?.netProfitLoss < 0 ? 'Profitability Risk' : null,
      company.stage === 'Seed' ? 'Early Stage Risk' : null,
      company.keyMetrics?.runwayMonths && company.keyMetrics.runwayMonths < 12 ? 'Runway Risk' : null,
      company.keyMetrics?.currentRatio < 1 ? 'Liquidity Risk' : null
    ].filter(Boolean)
  }));

  const riskDistribution = {
    high: riskAssessments.filter(c => c.riskLevel === 'High').length,
    medium: riskAssessments.filter(c => c.riskLevel === 'Medium').length,
    low: riskAssessments.filter(c => c.riskLevel === 'Low').length
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Risk Analysis</h1>
        <p className="text-slate-600 mt-2">Comprehensive risk assessment and monitoring for portfolio companies</p>
      </div>

      {/* Risk Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm">High Risk</p>
              <p className="text-3xl font-bold">{riskDistribution.high}</p>
              <p className="text-red-100 text-sm">Companies</p>
            </div>
            <AlertTriangle size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Medium Risk</p>
              <p className="text-3xl font-bold">{riskDistribution.medium}</p>
              <p className="text-yellow-100 text-sm">Companies</p>
            </div>
            <Clock size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm">Low Risk</p>
              <p className="text-3xl font-bold">{riskDistribution.low}</p>
              <p className="text-emerald-100 text-sm">Companies</p>
            </div>
            <Shield size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Portfolio Risk</p>
              <p className="text-3xl font-bold">Medium</p>
              <p className="text-blue-100 text-sm">Overall Level</p>
            </div>
            <TrendingDown size={32} />
          </div>
        </div>
      </div>

      {/* Risk Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Risk Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: 'High Risk', value: riskDistribution.high, color: '#EF4444' },
                  { name: 'Medium Risk', value: riskDistribution.medium, color: '#F59E0B' },
                  { name: 'Low Risk', value: riskDistribution.low, color: '#10B981' }
                ]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {[
                  { name: 'High Risk', value: riskDistribution.high, color: '#EF4444' },
                  { name: 'Medium Risk', value: riskDistribution.medium, color: '#F59E0B' },
                  { name: 'Low Risk', value: riskDistribution.low, color: '#10B981' }
                ].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Risk Score vs Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={riskAssessments.map(company => ({
              name: company.name,
              riskScore: company.riskScore,
              growth: company.keyMetrics?.revenueGrowth || 0
            }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="riskScore" name="Risk Score" />
              <YAxis dataKey="growth" name="Growth %" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Companies" dataKey="growth" fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Risk Assessment */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Detailed Risk Assessment</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Company</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Risk Level</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Risk Score</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Key Risks</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Runway</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {riskAssessments
                .sort((a, b) => b.riskScore - a.riskScore)
                .map((company, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold text-blue-600">
                          {company.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-medium text-slate-900">{company.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      company.riskLevel === 'High' ? 'bg-red-100 text-red-800' :
                      company.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-emerald-100 text-emerald-800'
                    }`}>
                      {company.riskLevel}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-slate-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            company.riskScore > 70 ? 'bg-red-500' :
                            company.riskScore > 40 ? 'bg-yellow-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${company.riskScore}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold">{company.riskScore}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {company.keyRisks.slice(0, 2).map((risk, riskIndex) => (
                        <span 
                          key={riskIndex}
                          className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                        >
                          {risk}
                        </span>
                      ))}
                      {company.keyRisks.length > 2 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                          +{company.keyRisks.length - 2} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-600">
                    {company.keyMetrics?.runwayMonths ? `${company.keyMetrics.runwayMonths} months` : 'N/A'}
                  </td>
                  <td className="py-3 px-4">
                    <button className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      company.riskLevel === 'High' ? 'bg-red-500 text-white' :
                      company.riskLevel === 'Medium' ? 'bg-yellow-500 text-white' :
                      'bg-emerald-500 text-white'
                    }`}>
                      {company.riskLevel === 'High' ? 'Urgent Review' :
                       company.riskLevel === 'Medium' ? 'Monitor' : 'Continue'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysisTab;