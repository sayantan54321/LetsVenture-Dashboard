import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MetricCard = ({ label, value, change, icon: Icon, colorClass, trend = 'up' }) => {
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;
  
  return (
    <div className="relative group">
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${colorClass} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center space-x-1">
            <TrendIcon size={16} className={trend === 'up' ? 'text-emerald-500' : 'text-red-500'} />
            <span className={`text-sm font-medium ${trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
              {change}
            </span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-1">{value}</h3>
        <p className="text-sm text-slate-600">{label}</p>
      </div>
    </div>
  );
};

export default MetricCard;