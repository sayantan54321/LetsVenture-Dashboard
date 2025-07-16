import React, { useState } from 'react';
import { 
  Award, Rocket, TrendingUp, Percent
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter
} from 'recharts';

// Enhanced Performance Tab
const PerformanceTab = ({ companies }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('fy24');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const performanceData = companies.map(company => {
    const fy24 = company.financials?.fy24 || {};
    
    return {
      name: company.name,
      industry: company.industry,
      revenue: fy24.totalRevenue || 0,
      profit: fy24.netProfitLoss || 0,
      growth: company.keyMetrics?.revenueGrowth || 0,
      margin: company.keyMetrics?.netMargin || 0,
      valuation: parseFloat(company.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', '')),
      users: company.users || 'N/A',
      funding: parseFloat(company.totalFunding.replace(/[$M]/g, ''))
    };
  });

  const topRevenue = [...performanceData].sort((a, b) => b.revenue - a.revenue).slice(0, 3);
  const topGrowth = [...performanceData].sort((a, b) => b.growth - a.growth).slice(0, 3);
  const topValuation = [...performanceData].sort((a, b) => b.valuation - a.valuation).slice(0, 3);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Performance Analysis</h1>
        <p className="text-slate-600 mt-2">Comprehensive performance metrics and benchmarking</p>
      </div>

      {/* Performance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm">Best Performer</p>
              <p className="text-xl font-bold">{topRevenue[0]?.name}</p>
              <p className="text-emerald-100 text-sm">₹{topRevenue[0]?.revenue} Cr Revenue</p>
            </div>
            <Award size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Fastest Growing</p>
              <p className="text-xl font-bold">{topGrowth[0]?.name}</p>
              <p className="text-blue-100 text-sm">{topGrowth[0]?.growth}% Growth</p>
            </div>
            <Rocket size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Highest Valuation</p>
              <p className="text-xl font-bold">{topValuation[0]?.name}</p>
              <p className="text-purple-100 text-sm">₹{topValuation[0]?.valuation} Cr</p>
            </div>
            <TrendingUp size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Portfolio IRR</p>
              <p className="text-3xl font-bold">24.5%</p>
              <p className="text-orange-100 text-sm">Above benchmark</p>
            </div>
            <Percent size={32} />
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue vs Valuation Bubble Chart */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Revenue vs Valuation Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="revenue" name="Revenue" unit=" Cr" />
              <YAxis dataKey="valuation" name="Valuation" unit=" Cr" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Companies" dataKey="valuation" fill="#3B82F6" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Growth Performance */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Growth Performance Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData.sort((a, b) => b.growth - a.growth)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="growth" fill="#10B981" name="Revenue Growth %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Leaderboard */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Performance Leaderboard</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Rank</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Company</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Industry</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Revenue (₹ Cr)</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Growth %</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Valuation (₹ Cr)</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Performance Score</th>
              </tr>
            </thead>
            <tbody>
              {performanceData
                .sort((a, b) => {
                  const scoreA = (a.revenue * 0.3) + (a.growth * 0.4) + (a.valuation * 0.3 / 100);
                  const scoreB = (b.revenue * 0.3) + (b.growth * 0.4) + (b.valuation * 0.3 / 100);
                  return scoreB - scoreA;
                })
                .map((company, index) => {
                  const score = ((company.revenue * 0.3) + (company.growth * 0.4) + (company.valuation * 0.3 / 100)).toFixed(1);
                  return (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            index === 0 ? 'bg-yellow-400 text-yellow-900' :
                            index === 1 ? 'bg-gray-300 text-gray-700' :
                            index === 2 ? 'bg-orange-400 text-orange-900' :
                            'bg-slate-100 text-slate-600'
                          }`}>
                            {index + 1}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-900">{company.name}</td>
                      <td className="py-3 px-4 text-slate-600">{company.industry}</td>
                      <td className="py-3 px-4 text-slate-900">₹{company.revenue}</td>
                      <td className="py-3 px-4">
                        <span className={`font-medium ${company.growth > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                          {company.growth > 0 ? '+' : ''}{company.growth}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-900">₹{company.valuation}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {score}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTab;