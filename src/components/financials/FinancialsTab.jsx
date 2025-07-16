import React, { useState } from 'react';
import { 
  IndianRupee, TrendingUp, BarChart3, Building, FileSpreadsheet, FilePieChart
} from 'lucide-react';
import { generateConsolidatedFinancials } from '../../utils/calculations';

// New Financial Reports Tab
const FinancialsTab = ({ companies }) => {
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [selectedReport, setSelectedReport] = useState('consolidated');

  const consolidatedData = generateConsolidatedFinancials(companies);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Financial Reports</h1>
        <p className="text-slate-600 mt-2">Comprehensive financial analysis and reporting suite</p>
      </div>

      {/* Report Controls */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Report Type</label>
              <select 
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="border border-slate-200 rounded-lg px-3 py-2"
              >
                <option value="consolidated">Consolidated P&L</option>
                <option value="individual">Individual Company</option>
                <option value="comparison">Comparative Analysis</option>
                <option value="ratios">Financial Ratios</option>
              </select>
            </div>
            {selectedReport === 'individual' && (
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Company</label>
                <select 
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="border border-slate-200 rounded-lg px-3 py-2"
                >
                  <option value="all">All Companies</option>
                  {companies.map(company => (
                    <option key={company.id} value={company.id}>{company.name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 flex items-center space-x-2">
              <FileSpreadsheet size={16} />
              <span>Export to Excel</span>
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center space-x-2">
              <FilePieChart size={16} />
              <span>Generate Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Consolidated Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm">Total Revenue</p>
              <p className="text-3xl font-bold">₹{consolidatedData.totalRevenue.toFixed(1)} Cr</p>
            </div>
            <IndianRupee size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Net Profit/Loss</p>
              <p className={`text-3xl font-bold ${consolidatedData.totalProfit >= 0 ? 'text-white' : 'text-red-200'}`}>
                ₹{consolidatedData.totalProfit.toFixed(1)} Cr
              </p>
            </div>
            <TrendingUp size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Total EBITDA</p>
              <p className="text-3xl font-bold">₹{consolidatedData.totalEbitda.toFixed(1)} Cr</p>
            </div>
            <BarChart3 size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Total Assets</p>
              <p className="text-3xl font-bold">₹{consolidatedData.totalAssets.toFixed(1)} Cr</p>
            </div>
            <Building size={32} />
          </div>
        </div>
      </div>

      {/* Detailed Financial Table */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Detailed P&L Statement (₹ Cr)</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Particulars</th>
                {companies.map(company => (
                  <th key={company.id} className="text-right py-3 px-4 font-semibold text-slate-700 min-w-24">
                    {company.name}
                  </th>
                ))}
                <th className="text-right py-3 px-4 font-semibold text-slate-700 bg-blue-50">Total</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Revenue from Operations', key: 'revenueFromOperations' },
                { label: 'Total Revenue', key: 'totalRevenue' },
                { label: 'Total Expenses', key: 'totalExpense' },
                { label: 'Operating Profit/EBITDA', key: 'ebitda' },
                { label: 'EBITDA Margin (%)', key: 'ebitdaMargin' },
                { label: 'Net Profit/Loss', key: 'netProfitLoss' },
                { label: 'Net Margin (%)', key: 'netMargin' }
              ].map((row, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">{row.label}</td>
                  {companies.map(company => {
                    const value = row.key.includes('Margin') 
                      ? company.keyMetrics?.[row.key] 
                      : company.financials?.fy24?.expenses?.[row.key] || company.financials?.fy24?.[row.key];
                    return (
                      <td key={company.id} className={`py-3 px-4 text-right ${
                        value < 0 ? 'text-red-600' : value > 0 ? 'text-green-600' : 'text-slate-600'
                      }`}>
                        {value !== undefined ? (row.key.includes('Margin') ? `${value}%` : value.toFixed(1)) : '-'}
                      </td>
                    );
                  })}
                  <td className="py-3 px-4 text-right font-semibold bg-blue-50">
                    {companies.reduce((sum, company) => {
                      const value = row.key.includes('Margin') 
                        ? 0 // Skip totaling margins
                        : company.financials?.fy24?.expenses?.[row.key] || company.financials?.fy24?.[row.key] || 0;
                      return sum + value;
                    }, 0).toFixed(1)}
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

export default FinancialsTab;