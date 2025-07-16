import React, { useState } from 'react';
import { 
  BarChart3, TrendingUp, TrendingDown, Rocket, Award, AlertTriangle, Download
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ComposedChart, ScatterChart, Scatter
} from 'recharts';

// Enhanced Analytics Tab
const AnalyticsTab = ({ companies }) => {
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [timeRange, setTimeRange] = useState('fy24');

  const revenueData = companies.map(company => ({
    name: company.name,
    fy24: company.financials?.fy24?.totalRevenue || 0,
    growth: company.keyMetrics?.revenueGrowth || 0,
    valuation: parseFloat(company.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', ''))
  }));

  const profitabilityData = companies.map(company => ({
    name: company.name,
    revenue: company.financials?.fy24?.totalRevenue || 0,
    profit: company.financials?.fy24?.netProfitLoss || 0,
    margin: company.keyMetrics?.netMargin || 0,
    ebitda: company.financials?.fy24?.ebitda || 0
  }));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Portfolio Analytics</h1>
        <p className="text-slate-600 mt-2">Deep dive into financial performance and market trends</p>
      </div>

      {/* Analytics Controls */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Analysis Type</label>
              <select 
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="border border-slate-200 rounded-lg px-3 py-2"
              >
                <option value="revenue">Revenue Analysis</option>
                <option value="profitability">Profitability Analysis</option>
                <option value="growth">Growth Metrics</option>
                <option value="efficiency">Efficiency Ratios</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Time Period</label>
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="border border-slate-200 rounded-lg px-3 py-2"
              >
                <option value="fy24">FY 2024</option>
                <option value="fy23">FY 2023</option>
                <option value="comparison">YoY Comparison</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center space-x-2">
              <Download size={16} />
              <span>Export Analytics</span>
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue vs Valuation Analysis */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Revenue vs Valuation Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fy24" name="Revenue" unit=" Cr" />
              <YAxis dataKey="valuation" name="Valuation" unit=" Cr" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Companies" dataKey="valuation" fill="#3B82F6" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Profitability Waterfall */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Profitability Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={profitabilityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#10B981" name="Revenue (₹ Cr)" />
              <Bar dataKey="profit" fill="#EF4444" name="Profit (₹ Cr)" />
              <Line type="monotone" dataKey="margin" stroke="#F59E0B" name="Net Margin %" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Financial Health Scores */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Financial Health Scores</h3>
          <div className="space-y-4">
            {companies.map((company, index) => {
              const healthScore = Math.min(100, Math.max(0, 
                50 + 
                (company.keyMetrics?.grossMargin || 0) / 2 + 
                (company.keyMetrics?.currentRatio || 0) * 10 +
                (company.financials?.fy24?.netProfitLoss > 0 ? 20 : -20) +
                (company.keyMetrics?.revenueGrowth || 0) / 5
              ));
              
              return (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">{company.name}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          healthScore > 70 ? 'bg-green-500' : 
                          healthScore > 40 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${healthScore}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold">{healthScore.toFixed(0)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Growth Momentum */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Growth Momentum</h3>
          <div className="space-y-4">
            {companies
              .sort((a, b) => (b.keyMetrics?.revenueGrowth || 0) - (a.keyMetrics?.revenueGrowth || 0))
              .map((company, index) => {
                const growth = company.keyMetrics?.revenueGrowth || 0;
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{company.name}</p>
                      <p className="text-xs text-slate-500">{company.industry}</p>
                    </div>
                    <div className={`flex items-center space-x-1 ${growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {growth > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                      <span className="font-semibold">{growth}%</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Key Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold text-emerald-800">Top Revenue Generator</span>
              </div>
              <p className="text-sm text-emerald-700">
                {companies.sort((a, b) => (b.financials?.fy24?.totalRevenue || 0) - (a.financials?.fy24?.totalRevenue || 0))[0]?.name} leads with ₹{companies.sort((a, b) => (b.financials?.fy24?.totalRevenue || 0) - (a.financials?.fy24?.totalRevenue || 0))[0]?.financials?.fy24?.totalRevenue} Cr revenue
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Rocket className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Fastest Growing</span>
              </div>
              <p className="text-sm text-blue-700">
                {companies.sort((a, b) => (b.keyMetrics?.revenueGrowth || 0) - (a.keyMetrics?.revenueGrowth || 0))[0]?.name} showing {companies.sort((a, b) => (b.keyMetrics?.revenueGrowth || 0) - (a.keyMetrics?.revenueGrowth || 0))[0]?.keyMetrics?.revenueGrowth}% growth
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-800">Highest Valuation</span>
              </div>
              <p className="text-sm text-purple-700">
                {companies.sort((a, b) => parseFloat(b.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', '')) - parseFloat(a.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', '')))[0]?.name} valued at {companies.sort((a, b) => parseFloat(b.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', '')) - parseFloat(a.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', '')))[0]?.valuation.current}
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-800">Watch List</span>
              </div>
              <p className="text-sm text-orange-700">
                {companies.filter(c => c.financials?.fy24?.netProfitLoss < 0).length} companies need profitability focus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTab;