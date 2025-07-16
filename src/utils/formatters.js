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