import React from 'react';
import { 
  IndianRupee, Building2, TrendingUp, Rocket, BarChart3, Award, 
  Target, TrendingDown, FileBarChart, PieChart
} from 'lucide-react';
import { 
  LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, 
  PieChart as RechartsPieChart, Pie, Cell, ComposedChart, ScatterChart, 
  Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar 
} from 'recharts';
import { usePortfolio } from '../../contexts/PortfolioContext'; 

// MetricCard Component
const MetricCard = ({ 
  label, 
  value, 
  change, 
  icon: Icon, 
  colorClass, 
  trend = 'up' 
}) => {
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

const PerformanceLeaderboard = ({ companies }) => {
  const growthData = companies?.slice(0, 10).map(company => ({
    name: company.name,
    revenue: company.financials?.fy24?.totalRevenue || 0,
    growth: company.keyMetrics?.revenueGrowth || 0,
    valuation: parseFloat(company.valuation?.current?.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', '') || '0')
  })) || [];

  const industryData = companies?.reduce((acc, company) => {
    const existing = acc.find(item => item.name === company.industry);
    if (existing) {
      existing.value += 1;
      existing.amount += parseFloat(company.valuation?.current?.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', '') || '0');
    } else {
      acc.push({
        name: company.industry,
        value: 1,
        amount: parseFloat(company.valuation?.current?.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', '') || '0'),
        color: ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'][acc.length % 5]
      });
    }
    return acc;
  }, []) || [];

  const topRevenue = [...growthData].sort((a, b) => b.revenue - a.revenue).slice(0, 3);
  const topGrowth = [...growthData].sort((a, b) => b.growth - a.growth).slice(0, 3);
  const topValuation = [...growthData].sort((a, b) => b.valuation - a.valuation).slice(0, 3);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Revenue vs Growth Scatter Plot */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Revenue vs Growth Analysis</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="revenue" name="Revenue" unit=" Cr" />
            <YAxis dataKey="growth" name="Growth" unit="%" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Companies" dataKey="growth" fill="#3B82F6" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Industry Distribution */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Portfolio Distribution</h3>
        <div className="flex items-center justify-center h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Pie
                data={industryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {industryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name, props) => [`${value} companies`, `₹${props.payload.amount.toFixed(0)} Cr`]} />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mt-4">
          {industryData.map((industry, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center space-x-2 mb-1">
                <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: industry.color }}></div>
                <span className="text-sm text-slate-600">{industry.name}</span>
              </div>
              <p className="text-xs font-semibold text-slate-700">₹{industry.amount.toFixed(0)} Cr</p>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Leaderboard */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 lg:col-span-2">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Top Performers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top by Revenue */}
          <div>
            <h4 className="font-medium text-slate-700 mb-3 flex items-center space-x-2">
              <TrendingUp size={16} className="text-emerald-500" />
              <span>By Revenue</span>
            </h4>
            {topRevenue.map((company, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    index === 0 ? 'bg-yellow-400 text-yellow-900' :
                    index === 1 ? 'bg-gray-300 text-gray-700' : 'bg-orange-400 text-orange-900'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium">{company.name}</span>
                </div>
                <span className="text-sm text-blue-600 font-semibold">₹{company.revenue} Cr</span>
              </div>
            ))}
          </div>

          {/* Top by Growth */}
          <div>
            <h4 className="font-medium text-slate-700 mb-3 flex items-center space-x-2">
              <Rocket size={16} className="text-blue-500" />
              <span>By Growth</span>
            </h4>
            {topGrowth.map((company, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    index === 0 ? 'bg-yellow-400 text-yellow-900' :
                    index === 1 ? 'bg-gray-300 text-gray-700' : 'bg-orange-400 text-orange-900'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium">{company.name}</span>
                </div>
                <span className="text-sm text-blue-600 font-semibold">+{company.growth}%</span>
              </div>
            ))}
          </div>

          {/* Top by Valuation */}
          <div>
            <h4 className="font-medium text-slate-700 mb-3 flex items-center space-x-2">
              <Award size={16} className="text-purple-500" />
              <span>By Valuation</span>
            </h4>
            {topValuation.map((company, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    index === 0 ? 'bg-yellow-400 text-yellow-900' :
                    index === 1 ? 'bg-gray-300 text-gray-700' : 'bg-orange-400 text-orange-900'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium">{company.name}</span>
                </div>
                <span className="text-sm text-purple-600 font-semibold">₹{company.valuation} Cr</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// RecentActivity Component
const RecentActivity = () => {
  const activities = [
    { company: 'Jar', action: 'Achieved cash flow positivity', time: '2 hours ago', type: 'success' },
    { company: 'Seekho', action: 'Raised $8M Series A funding', time: '1 day ago', type: 'funding' },
    { company: 'hBits', action: 'Onboarded 50+ new hospitals', time: '2 days ago', type: 'growth' },
    { company: 'High Avenue', action: 'Crossed ₹2,800 Cr AUM milestone', time: '3 days ago', type: 'milestone' },
    { company: 'BizzTM', action: 'Launched in 5 new cities', time: '1 week ago', type: 'expansion' }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`w-2 h-2 rounded-full ${
              activity.type === 'success' ? 'bg-green-500' : 
              activity.type === 'funding' ? 'bg-blue-500' : 
              activity.type === 'growth' ? 'bg-emerald-500' :
              activity.type === 'milestone' ? 'bg-purple-500' : 'bg-orange-500'
            }`}></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">
                {activity.company}
              </p>
              <p className="text-sm text-slate-500 truncate">{activity.action}</p>
            </div>
            <p className="text-xs text-slate-400">{activity.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuickActions = () => {
  const { setActiveTab } = usePortfolio();

  const handleNavigation = (tab) => {
    setActiveTab(tab); 
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => handleNavigation('companies')}
          className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <Building2 className="w-6 h-6 text-blue-500 mx-auto mb-2" />
          <p className="text-sm font-medium text-slate-900">View Companies</p>
        </button>
        <button 
          onClick={() => handleNavigation('analytics')}
          className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
          <p className="text-sm font-medium text-slate-900">View Analytics</p>
        </button>
        <button 
          onClick={() => handleNavigation('financials')}
          className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <FileBarChart className="w-6 h-6 text-purple-500 mx-auto mb-2" />
          <p className="text-sm font-medium text-slate-900">Financial Reports</p>
        </button>
        <button 
          onClick={() => handleNavigation('portfolio')}
          className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <PieChart className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <p className="text-sm font-medium text-slate-900">Portfolio View</p>
        </button>
      </div>
    </div>
  );
};

// Main DashboardTab Component
const DashboardTab = ({ companies = [], metrics }) => {
  return (
    <div>
      {/* Enhanced Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <MetricCard
          label="Total Portfolio Value"
          value={`₹${metrics.totalValue.toFixed(0)} Cr`}
          change="+12.5%"
          icon={IndianRupee}
          colorClass="from-blue-500 to-blue-600"
          trend="up"
        />
        <MetricCard
          label="Active Companies"
          value={metrics.totalCompanies.toString()}
          change={`${metrics.profitableCompanies} profitable`}
          icon={Building2}
          colorClass="from-emerald-500 to-emerald-600"
          trend="up"
        />
        <MetricCard
          label="Total Funding"
          value={`$${metrics.totalFunding.toFixed(1)}M`}
          change="+23.1%"
          icon={TrendingUp}
          colorClass="from-purple-500 to-purple-600"
          trend="up"
        />
        <MetricCard
          label="Avg Growth Rate"
          value={`${metrics.avgGrowth.toFixed(1)}%`}
          change="YoY Revenue"
          icon={Rocket}
          colorClass="from-orange-500 to-orange-600"
          trend="up"
        />
      </div>

      {/* Enhanced Charts Section */}
      <PerformanceLeaderboard companies={companies} />

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <QuickActions />
      </div>
    </div>
  );
};

export default DashboardTab;