import React, { useState } from 'react';
import { 
  IndianRupee, Building2, TrendingUp, Percent
} from 'lucide-react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip
} from 'recharts';

// Enhanced Portfolio Tab
const PortfolioTab = ({ companies, metrics }) => {
  const [selectedView, setSelectedView] = useState('allocation');

  const allocationData = companies.map(company => ({
    name: company.name,
    value: parseFloat(company.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', '')),
    industry: company.industry,
    percentage: (parseFloat(company.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', '')) / metrics.totalValue * 100).toFixed(1),
    stage: company.stage
  })).sort((a, b) => b.value - a.value);

  const stageAllocation = companies.reduce((acc, company) => {
    const stage = company.stage;
    const value = parseFloat(company.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', ''));
    
    if (acc[stage]) {
      acc[stage].value += value;
      acc[stage].count += 1;
    } else {
      acc[stage] = { value, count: 1 };
    }
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Portfolio Overview</h1>
        <p className="text-slate-600 mt-2">Comprehensive portfolio analysis and allocation insights</p>
      </div>

      {/* Portfolio Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Portfolio Value</p>
              <p className="text-3xl font-bold">₹{metrics.totalValue.toFixed(0)} Cr</p>
              <p className="text-blue-100 text-xs mt-1">+12.5% YoY</p>
            </div>
            <IndianRupee size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm">Active Investments</p>
              <p className="text-3xl font-bold">{metrics.totalCompanies}</p>
              <p className="text-emerald-100 text-xs mt-1">Across {[...new Set(companies.map(c => c.industry))].length} industries</p>
            </div>
            <Building2 size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Total Deployed</p>
              <p className="text-3xl font-bold">${metrics.totalFunding.toFixed(1)}M</p>
              <p className="text-purple-100 text-xs mt-1">Avg ${(metrics.totalFunding/metrics.totalCompanies).toFixed(1)}M per company</p>
            </div>
            <TrendingUp size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Portfolio IRR</p>
              <p className="text-3xl font-bold">24.5%</p>
              <p className="text-orange-100 text-xs mt-1">Above benchmark (18%)</p>
            </div>
            <Percent size={32} />
          </div>
        </div>
      </div>

      {/* Portfolio Views */}
      <div className="mb-6">
        <div className="flex space-x-2">
          {[
            { id: 'allocation', label: 'Portfolio Allocation' },
            { id: 'performance', label: 'Performance Analysis' },
            { id: 'diversification', label: 'Diversification' },
            { id: 'risk', label: 'Risk Assessment' }
          ].map((view) => (
            <button
              key={view.id}
              onClick={() => setSelectedView(view.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedView === view.id
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {view.label}
            </button>
          ))}
        </div>
      </div>

      {selectedView === 'allocation' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Company Allocation */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Company Allocation</h3>
            <div className="space-y-4">
              {allocationData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${
                      index === 0 ? 'bg-blue-500' : 
                      index === 1 ? 'bg-emerald-500' : 
                      index === 2 ? 'bg-purple-500' : 
                      index === 3 ? 'bg-orange-500' : 
                      index === 4 ? 'bg-red-500' : 'bg-pink-500'
                    }`}></div>
                    <div>
                      <p className="font-medium text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500">{item.industry} • {item.stage}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{item.percentage}%</p>
                    <p className="text-sm text-slate-500">₹{item.value} Cr</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stage Distribution */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Investment Stage Distribution</h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={Object.entries(stageAllocation).map(([stage, data], index) => ({
                      name: stage,
                      value: data.value,
                      count: data.count,
                      color: ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'][index % 5]
                    }))}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {Object.entries(stageAllocation).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'][index % 5]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value, name, props) => [
                    `₹${value.toFixed(0)} Cr`,
                    `${props.payload.count} companies`
                  ]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center flex-wrap gap-4 mt-4">
              {Object.entries(stageAllocation).map(([stage, data], index) => (
                <div key={stage} className="text-center">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'][index % 5] }}></div>
                    <span className="text-sm text-slate-600">{stage}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-700">{data.count} companies</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedView === 'performance' && (
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Portfolio Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-emerald-600 mb-1">24.5%</h4>
              <p className="text-sm text-emerald-700 font-medium">Portfolio IRR</p>
              <p className="text-xs text-emerald-600 mt-1">vs 18% benchmark</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-blue-600 mb-1">2.8x</h4>
              <p className="text-sm text-blue-700 font-medium">Average Multiple</p>
              <p className="text-xs text-blue-600 mt-1">Cash-on-cash return</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-purple-600 mb-1">80%</h4>
              <p className="text-sm text-purple-700 font-medium">Success Rate</p>
              <p className="text-xs text-purple-600 mt-1">Positive returns</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioTab;