export const calculateRiskScore = (company) => {
  let score = 50;
  
  const financials = company.financials?.fy24 || {};
  if (financials.netProfitLoss < 0) score += 20;
  if (financials.ebitdaMargin < -50) score += 15;
  if (company.keyMetrics?.currentRatio < 1) score += 10;
  
  if (company.stage === 'Seed') score += 15;
  else if (company.stage === 'Series A') score += 10;
  else if (company.stage === 'Series B') score += 5;
  
  if (company.marketAnalysis?.marketShare && parseFloat(company.marketAnalysis.marketShare.replace('%', '')) < 5) score += 10;
  if (company.keyMetrics?.runwayMonths && company.keyMetrics.runwayMonths < 12) score += 20;
  
  return Math.min(100, Math.max(0, score));
};

export const generateConsolidatedFinancials = (companies) => {
  return companies.reduce((acc, company) => {
    const financials = company.financials?.fy24;
    if (financials) {
      acc.totalRevenue += financials.totalRevenue || 0;
      acc.totalProfit += financials.netProfitLoss || 0;
      acc.totalEbitda += financials.ebitda || 0;
      acc.totalAssets += company.financials?.balanceSheet?.assets?.totalAssets || 0;
    }
    return acc;
  }, { totalRevenue: 0, totalProfit: 0, totalEbitda: 0, totalAssets: 0 });
};

// src/utils/formatters.js
export const formatCurrency = (amount, currency = '₹') => {
  return `${currency}${amount.toFixed(1)} Cr`;
};

export const formatPercentage = (value) => {
  return `${value > 0 ? '+' : ''}${value}%`;
};

export const getStatusColor = (status) => {
  switch (status) {
    case 'Active': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case 'Acquired': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'IPO': return 'bg-purple-100 text-purple-800 border-purple-200';
    default: return 'bg-slate-100 text-slate-800 border-slate-200';
  }
};

export const getStageColor = (stage) => {
  switch (stage) {
    case 'Seed': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Series A': return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Series B': return 'bg-red-100 text-red-800 border-red-200';
    default: return 'bg-slate-100 text-slate-800 border-slate-200';
  }
};