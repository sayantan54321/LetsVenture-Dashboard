import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Building2, BarChart3, Upload, Users, 
  TrendingUp, TrendingDown, DollarSign, Calendar, MapPin,
  ChevronDown, ChevronUp, Search, Bell, User, FileText,
  ArrowUpRight, ArrowDownRight, Eye, Download, Filter,
  Star, Globe, Linkedin, ExternalLink, Phone, Mail,
  PieChart, LineChart, Activity, Briefcase, Award,
  Target, Zap, Shield, Rocket, Plus, Edit, Trash2,
  AlertTriangle, CheckCircle, Clock, TrendingUpDown,
  Calculator, Percent, BookOpen, Database, Settings,
  Hash, IndianRupee, CircleDollarSign, CreditCard,
  Banknote, Wallet, PiggyBank, Building, Factory,
  Layers, Network, Gauge, Sliders, BarChart4,
  BarChart2, FileBarChart, FilePieChart, FileSpreadsheet,
  LogOut, Lock, Mail as MailIcon, X, Upload as UploadIcon,
} from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, ComposedChart, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Enhanced company data with comprehensive financial information
const portfolioCompanies = [
  {
    id: '1',
    name: 'Jar',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/erkxwhl1gdu48hr9t5k6',
    description: 'Digital gold investment platform enabling micro-savings starting from ₹1',
    industry: 'Fintech',
    sector: 'Digital Gold Investment',
    founded: '2021',
    headquarters: 'Bangalore, Karnataka, India',
    employees: '271',
    website: 'https://www.myjar.app',
    linkedin: 'https://www.linkedin.com/company/jarapp',
    email: 'contact@myjar.app',
    
    valuation: { 
      current: '₹2,110 Cr', 
      previous: '$300M (2022)',
      history: [
        { date: '2022-08', value: 2110, round: 'Series B' },
        { date: '2021-12', value: 1250, round: 'Series A' },
        { date: '2021-06', value: 270, round: 'Seed' }
      ]
    },
    totalFunding: '$63.3M',
    fundingRounds: 5,
    leadInvestors: ['Tiger Global Management', 'Arkam Ventures', 'WEH Ventures'],
    users: '1.5 Cr+',
    status: 'Active',
    stage: 'Series B',
    
    team: [
      {
        name: 'Nishchay AG',
        designation: 'Co-Founder & CEO',
        description: 'Former VP of Product at InMobi. Led product teams at multiple startups.',
        linkedin: 'https://www.linkedin.com/in/nishchayag',
        experience: '8+ years'
      },
      {
        name: 'Misbah Ashraf',
        designation: 'Co-Founder & CPO',
        description: 'Former founding member at Marsplay. Expert in fintech product development.',
        linkedin: 'https://www.linkedin.com/in/misbahashraf',
        experience: '7+ years'
      }
    ],
    
    financials: {
      fy24: {
        revenueFromOperations: 49.03,
        revenueStreams: {
          'Gold Trading Commission': 35.2,
          'Subscription Fees': 8.5,
          'Credit Business': 3.8,
          'Transaction Fees': 1.53
        },
        totalRevenue: 56.41,
        
        expenses: {
          costOfMaterialConsumed: 18.5,
          purchaseOfStockInTrade: 5.2,
          changesInInventories: -2.1,
          employeeBenefitExpense: 85.2,
          marketingCost: 45.8,
          technologyExpense: 25.6,
          administrativeExpenses: 15.3,
          otherExpenses: 20.1,
          totalExpense: 213.6
        },
        
        grossProfit: 32.91,
        operatingProfit: -157.19,
        ebitda: -154.07,
        ebitdaMargin: -273.1,
        
        otherIncome: 7.02,
        otherExpense: 2.5,
        depreciationAmortization: 5.8,
        profitBeforeInterestTax: -152.75,
        financeCharges: 12.3,
        profitBeforeTax: -165.05,
        tax: -61.08,
        netProfitLoss: -103.97,
        
        previousYear: {
          totalRevenue: 20.3,
          netProfitLoss: -123.0,
          revenueGrowth: 177.8,
          lossReduction: 15.5
        }
      },
      
      balanceSheet: {
        assets: {
          currentAssets: {
            cashAndBankBalance: 185.5,
            inventory: 45.2,
            tradeReceivables: 25.8,
            shortTermInvestments: 35.6,
            otherCurrentAssets: 18.3,
            totalCurrentAssets: 310.4
          },
          nonCurrentAssets: {
            propertyPlantEquipment: 25.8,
            intangibleAssets: 15.2,
            investments: 125.6,
            deferredTaxAssets: 8.5,
            otherNonCurrentAssets: 12.7,
            totalNonCurrentAssets: 187.8
          },
          totalAssets: 498.2
        },
        liabilities: {
          currentLiabilities: {
            shortTermBorrowings: 12.5,
            tradePayables: 35.8,
            otherCurrentLiabilities: 68.1,
            shortTermProvisions: 8.2,
            totalCurrentLiabilities: 124.6
          },
          nonCurrentLiabilities: {
            longTermBorrowings: 25.8,
            deferredTaxLiabilities: 5.2,
            longTermProvisions: 8.5,
            otherNonCurrentLiabilities: 12.1,
            totalNonCurrentLiabilities: 51.6
          },
          totalLiabilities: 176.2
        },
        equity: {
          shareCapital: 12.8,
          retainedEarnings: -125.6,
          otherEquity: 434.8,
          totalEquity: 322.0
        }
      },
      
      cashFlow: {
        operatingActivities: {
          netProfitLoss: -103.97,
          depreciationAmortization: 5.8,
          workingCapitalChanges: -12.5,
          otherOperatingItems: 15.2,
          netCashFromOperating: -95.47
        },
        investingActivities: {
          purchaseOfFixedAssets: -15.2,
          investmentsAcquired: -35.8,
          otherInvestingItems: 5.8,
          netCashFromInvesting: -45.2
        },
        financingActivities: {
          proceedsFromEquity: 180.5,
          borrowingRepayments: -8.5,
          otherFinancingItems: 12.8,
          netCashFromFinancing: 184.8
        },
        netCashFlow: 44.11,
        cashAtBeginning: 141.39,
        cashAtEnd: 185.5
      }
    },
    
    keyMetrics: {
      aum: '₹400+ Cr',
      monthlyActiveUsers: '45L',
      avgTransactionSize: '₹150',
      userRetention: 85,
      monthlyGrowth: 20,
      
      revenueGrowth: 177.8,
      grossMargin: 58.4,
      operatingMargin: -278.6,
      ebitdaMargin: -273.1,
      netMargin: -184.3,
      
      inventoryTurnoverDays: 89,
      debtorsDays: 19,
      creditorsDays: 62,
      cashConversionCycle: 46,
      
      currentRatio: 2.49,
      quickRatio: 2.13,
      cashRatio: 1.49,
      debtToEquity: 0.12,
      debtToAssets: 0.08,
      
      costPerAcquisition: '₹125',
      lifetimeValue: '₹2,850',
      ltv2cacRatio: 22.8,
      goldVolumeTraded: '15,000 kg/month',
      avgOrderValue: '₹185',
      
      monthlyBurnRate: '₹8.5 Cr',
      runwayMonths: 21.8,
      breakEvenProjection: 'Q3 2025'
    },
    
    marketAnalysis: {
      marketSize: '₹45,000 Cr',
      tamSize: '₹1,20,000 Cr',
      marketShare: '12%',
      competitorCount: 15,
      directCompetitors: ['Gullak', 'GoldMoney', 'SafeGold', 'Acorns', 'Paymi'],
      competitiveAdvantages: [
        'Lowest transaction fees',
        'Highest user retention',
        'Strong brand recognition',
        'Superior technology platform'
      ]
    },
    
    riskFactors: {
      businessRisk: 'Medium',
      financialRisk: 'High',
      marketRisk: 'Low',
      operationalRisk: 'Medium',
      regulatoryRisk: 'Medium',
      keyRisks: [
        'High burn rate',
        'Regulatory changes in gold trading',
        'Market competition',
        'Customer acquisition costs'
      ]
    },
    
    quarterlyData: [
      { quarter: 'Q1 FY24', revenue: 8.5, profit: -28.5, users: 8.5 },
      { quarter: 'Q2 FY24', revenue: 12.8, profit: -32.1, users: 10.2 },
      { quarter: 'Q3 FY24', revenue: 16.2, profit: -24.8, users: 12.8 },
      { quarter: 'Q4 FY24', revenue: 18.9, profit: -18.6, users: 15.0 }
    ],
    
    recentNews: [
      'Achieved cash flow positivity in FY24',
      '$50M funding deal with Prosus fell through over valuation differences',
      'Preparing for IPO in 2026',
      'Launched credit line feature for gold investors'
    ]
  },

  {
    id: '2',
    name: 'Gullak',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1643090924/mqcr9kgnjytdwtoa8wyx.png',
    description: 'Automated savings and digital gold investment platform with Gold+ leasing feature',
    industry: 'Fintech',
    sector: 'Digital Gold Investment',
    founded: '2021',
    headquarters: 'Bengaluru, Karnataka, India',
    employees: '23',
    website: 'https://gullak.money',
    linkedin: 'https://www.linkedin.com/company/gullak-money',
    
    valuation: { 
      current: '₹29 Cr',
      history: [
        { date: '2023-01', value: 29, round: 'Seed' },
        { date: '2022-03', value: 10, round: 'Pre-Seed' }
      ]
    },
    totalFunding: '$4.43M',
    fundingRounds: 3,
    leadInvestors: ['Better Capital', 'Y Combinator', 'GMO Venture Partners'],
    users: '1M',
    status: 'Active',
    stage: 'Seed',
    
    team: [
      {
        name: 'Manthan Shah',
        designation: 'Co-Founder & CEO',
        description: 'Former JusPay executive with deep fintech experience',
        linkedin: 'https://www.linkedin.com/in/manthanshah',
        experience: '6+ years'
      },
      {
        name: 'Dilip Jain', 
        designation: 'Co-Founder & CTO',
        description: 'Ex-JusPay, led technical teams at multiple startups',
        linkedin: 'https://www.linkedin.com/in/dilipjain',
        experience: '8+ years'
      }
    ],
    
    financials: {
      fy24: {
        revenueFromOperations: 4.14,
        revenueStreams: {
          'Gold Trading Commission': 2.8,
          'Gold+ Leasing Revenue': 0.9,
          'Subscription Fees': 0.44
        },
        totalRevenue: 4.14,
        
        expenses: {
          costOfMaterialConsumed: 1.44,
          employeeBenefitExpense: 3.2,
          marketingCost: 1.8,
          technologyExpense: 1.5,
          otherExpenses: 0.8,
          totalExpense: 8.74
        },
        
        grossProfit: 2.7,
        operatingProfit: -4.6,
        ebitda: -4.2,
        ebitdaMargin: -101.4,
        netProfitLoss: -4.5,
        
        previousYear: {
          totalRevenue: 1.2,
          revenueGrowth: 245
        }
      },
      
      balanceSheet: {
        assets: {
          currentAssets: {
            cashAndBankBalance: 8.5,
            inventory: 2.3,
            tradeReceivables: 1.2,
            otherCurrentAssets: 1.8,
            totalCurrentAssets: 13.8
          },
          totalAssets: 18.6
        },
        liabilities: {
          currentLiabilities: {
            tradePayables: 1.8,
            otherCurrentLiabilities: 2.4,
            totalCurrentLiabilities: 4.2
          },
          totalLiabilities: 5.4
        },
        equity: {
          totalEquity: 13.2
        }
      }
    },
    
    keyMetrics: {
      aum: '₹25 Cr',
      monthlyActiveUsers: '1.8L',
      avgTransactionSize: '₹85',
      userRetention: 78,
      monthlyGrowth: 25,
      
      revenueGrowth: 245,
      grossMargin: 65.2,
      operatingMargin: -111.1,
      ebitdaMargin: -101.4,
      netMargin: -108.7,
      
      inventoryTurnoverDays: 58,
      debtorsDays: 106,
      creditorsDays: 45,
      cashConversionCycle: 119,
      
      currentRatio: 3.29,
      quickRatio: 2.74,
      debtToEquity: 0.09,
      
      costPerAcquisition: '₹95',
      lifetimeValue: '₹1,250',
      goldPlusReturns: '16%',
      
      monthlyBurnRate: '₹0.6 Cr',
      runwayMonths: 14.2
    },
    
    marketAnalysis: {
      marketSize: '₹45,000 Cr',
      marketShare: '2%',
      competitorCount: 12,
      directCompetitors: ['Jar', 'GoldMoney', 'SafeGold']
    },
    
    quarterlyData: [
      { quarter: 'Q1 FY24', revenue: 0.8, profit: -1.2, users: 0.6 },
      { quarter: 'Q2 FY24', revenue: 1.0, profit: -1.1, users: 0.8 },
      { quarter: 'Q3 FY24', revenue: 1.2, profit: -1.0, users: 0.9 },
      { quarter: 'Q4 FY24', revenue: 1.14, profit: -1.2, users: 1.0 }
    ]
  },

  {
    id: '3',
    name: 'hBits',
    logo: 'https://ui-avatars.com/api/?name=hBits&background=6366F1&color=ffffff&size=256',
    description: 'AI-powered healthcare data analytics platform for medical institutions',
    industry: 'HealthTech',
    sector: 'Healthcare Analytics',
    founded: '2020',
    headquarters: 'Mumbai, Maharashtra, India',
    employees: '45',
    website: 'https://hbits.health',
    
    valuation: {
      current: '₹125 Cr',
      history: [
        { date: '2023-06', value: 125, round: 'Series A' },
        { date: '2022-01', value: 35, round: 'Seed' }
      ]
    },
    totalFunding: '$8.2M',
    fundingRounds: 3,
    leadInvestors: ['Nexus Venture Partners', 'Prime Venture Partners'],
    users: '250+ Hospitals',
    status: 'Active',
    stage: 'Series A',
    
    financials: {
      fy24: {
        revenueFromOperations: 18.5,
        revenueStreams: {
          'SaaS Subscriptions': 12.8,
          'Implementation Services': 3.2,
          'Data Analytics Consulting': 2.5
        },
        totalRevenue: 18.5,
        
        expenses: {
          employeeBenefitExpense: 12.4,
          technologyExpense: 4.2,
          marketingCost: 2.8,
          otherExpenses: 3.1,
          totalExpense: 22.5
        },
        
        grossProfit: 15.3,
        operatingProfit: -4.0,
        ebitda: -3.2,
        ebitdaMargin: -17.3,
        netProfitLoss: -4.2,
        
        previousYear: {
          totalRevenue: 8.5,
          revenueGrowth: 117.6
        }
      }
    },
    
    keyMetrics: {
      monthlyRecurringRevenue: '₹1.8 Cr',
      customerAcquisitionCost: '₹85,000',
      customerLifetimeValue: '₹12,50,000',
      churnRate: '5%',
      revenueGrowth: 117.6,
      grossMargin: 82.7,
      netMargin: -22.7,
      hospitalsOnboarded: 250,
      dataPointsProcessed: '50M+/month',
      avgImplementationTime: '45 days',
      customerSatisfactionScore: '4.8/5'
    },
    
    marketAnalysis: {
      marketSize: '₹12,000 Cr',
      marketShare: '0.8%',
      competitorCount: 8,
      directCompetitors: ['Practo', 'Healthplix', 'PharmEasy B2B']
    },
    
    quarterlyData: [
      { quarter: 'Q1 FY24', revenue: 3.2, profit: -1.8, users: 180 },
      { quarter: 'Q2 FY24', revenue: 4.1, profit: -1.2, users: 200 },
      { quarter: 'Q3 FY24', revenue: 5.4, profit: -0.8, users: 220 },
      { quarter: 'Q4 FY24', revenue: 5.8, profit: -0.4, users: 250 }
    ]
  },

  {
    id: '4',
    name: 'High Avenue',
    logo: 'https://ui-avatars.com/api/?name=High+Avenue&background=EC4899&color=ffffff&size=256',
    description: 'Premium real estate investment platform for HNI and institutional investors',
    industry: 'PropTech',
    sector: 'Real Estate Investment',
    founded: '2019',
    headquarters: 'Gurugram, Haryana, India',
    employees: '89',
    website: 'https://highavenue.in',
    
    valuation: {
      current: '₹485 Cr',
      history: [
        { date: '2024-01', value: 485, round: 'Series B' },
        { date: '2022-08', value: 180, round: 'Series A' },
        { date: '2021-03', value: 45, round: 'Seed' }
      ]
    },
    totalFunding: '$32.5M',
    users: '15,000+ Investors',
    status: 'Active',
    stage: 'Series B',
    
    financials: {
      fy24: {
        revenueFromOperations: 45.8,
        revenueStreams: {
          'Commission on Investments': 32.5,
          'Asset Management Fees': 8.9,
          'Advisory Services': 4.4
        },
        totalRevenue: 45.8,
        
        expenses: {
          employeeBenefitExpense: 18.5,
          marketingCost: 12.3,
          technologyExpense: 6.8,
          otherExpenses: 8.9,
          totalExpense: 46.5
        },
        
        grossProfit: 41.4,
        operatingProfit: -0.7,
        ebitda: 2.1,
        ebitdaMargin: 4.6,
        netProfitLoss: -1.2,
        
        previousYear: {
          totalRevenue: 28.5,
          revenueGrowth: 60.7
        }
      }
    },
    
    keyMetrics: {
      assetsUnderManagement: '₹2,800 Cr',
      avgInvestmentSize: '₹25L',
      investorRetention: '92%',
      revenueGrowth: 60.7,
      grossMargin: 90.4,
      netMargin: -2.6,
      propertiesListed: '1,250+',
      avgRoi: '14.5%',
      portfolioDiversification: '85%',
      digitalTransactionRate: '98%'
    },
    
    marketAnalysis: {
      marketSize: '₹15,00,000 Cr',
      marketShare: '0.2%',
      directCompetitors: ['Strata', 'PropertyShare', 'SmallCase Real Estate']
    },
    
    quarterlyData: [
      { quarter: 'Q1 FY24', revenue: 8.5, profit: 0.2, users: 12.5 },
      { quarter: 'Q2 FY24', revenue: 10.2, profit: -0.5, users: 13.2 },
      { quarter: 'Q3 FY24', revenue: 12.8, profit: -0.8, users: 14.1 },
      { quarter: 'Q4 FY24', revenue: 14.3, profit: -0.1, users: 15.0 }
    ]
  },

  {
    id: '5',
    name: 'Monrow',
    logo: 'https://ui-avatars.com/api/?name=Monrow&background=F59E0B&color=ffffff&size=256',
    description: 'AI-powered personal finance management and investment advisory platform',
    industry: 'Fintech',
    sector: 'Personal Finance Management',
    founded: '2021',
    headquarters: 'Bengaluru, Karnataka, India',
    employees: '67',
    website: 'https://monrow.ai',
    
    valuation: {
      current: '₹210 Cr',
      history: [
        { date: '2023-09', value: 210, round: 'Series A' },
        { date: '2022-05', value: 65, round: 'Seed' }
      ]
    },
    totalFunding: '$15.8M',
    users: '800K+',
    status: 'Active',
    stage: 'Series A',
    
    financials: {
      fy24: {
        revenueFromOperations: 12.8,
        revenueStreams: {
          'Subscription Revenue': 8.5,
          'Commission from Partners': 3.2,
          'Premium Advisory': 1.1
        },
        totalRevenue: 12.8,
        
        expenses: {
          employeeBenefitExpense: 15.2,
          technologyExpense: 4.8,
          marketingCost: 8.9,
          otherExpenses: 3.2,
          totalExpense: 32.1
        },
        
        operatingProfit: -19.3,
        ebitda: -18.1,
        netProfitLoss: -19.8,
        
        previousYear: {
          totalRevenue: 4.2,
          revenueGrowth: 204.8
        }
      }
    },
    
    keyMetrics: {
      monthlyActiveUsers: '350K',
      averageRevenuePerUser: '₹458',
      userRetention: '76%',
      revenueGrowth: 204.8,
      churnRate: '12%',
      assetsTracked: '₹5,200 Cr',
      goalCompletionRate: '68%',
      avgSavingsIncrease: '32%'
    },
    
    quarterlyData: [
      { quarter: 'Q1 FY24', revenue: 2.1, profit: -5.8, users: 0.45 },
      { quarter: 'Q2 FY24', revenue: 2.8, profit: -4.9, users: 0.58 },
      { quarter: 'Q3 FY24', revenue: 3.5, profit: -4.2, users: 0.68 },
      { quarter: 'Q4 FY24', revenue: 4.4, profit: -4.9, users: 0.8 }
    ]
  },

  {
    id: '6',
    name: 'Seekho',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1639507906/tbkcbpgdwevuabc8guzj.png',
    description: 'Short-form educational OTT platform offering skill-based learning in regional languages',
    industry: 'EdTech',
    sector: 'OTT Education Platform',
    founded: '2020',
    headquarters: 'Bengaluru, Karnataka, India',
    employees: '38',
    website: 'https://seekho.app',
    
    valuation: { 
      current: '₹336 Cr',
      history: [
        { date: '2024-11', value: 336, round: 'Series A' },
        { date: '2022-03', value: 125, round: 'Pre-Series A' },
        { date: '2021-05', value: 35, round: 'Seed' }
      ]
    },
    totalFunding: '$14.3M',
    users: '7M+',
    status: 'Active', 
    stage: 'Series A',
    
    financials: {
      fy24: {
        revenueFromOperations: 12.8,
        revenueStreams: {
          'Subscription Revenue': 8.5,
          'Advertisement Revenue': 3.2,
          'Course Sales': 1.1
        },
        totalRevenue: 12.8,
        expenses: {
          contentAcquisitionCost: 4.2,
          employeeBenefitExpense: 6.8,
          marketingCost: 3.5,
          technologyExpense: 2.1,
          otherExpenses: 1.2,
          totalExpense: 17.8
        },
        operatingProfit: -5.0,
        ebitda: -4.6,
        ebitdaMargin: -35.9,
        netProfitLoss: -4.6,
        
        previousYear: {
          totalRevenue: 5.2,
          revenueGrowth: 146
        }
      }
    },
    
    keyMetrics: {
      monthlyActiveUsers: '3.5M',
      avgWatchTime: '25 min/day',
      subscriptionRevenue: '₹35 Cr ARR',
      churnRate: '8%',
      grossMargin: 67.2,
      operatingMargin: -39.1,
      netMargin: -35.9,
      costPerAcquisition: '₹45',
      lifetimeValue: '₹650',
      contentHours: '50,000+ hours',
      languagesSupported: 8,
      courseCompletionRate: '68%'
    },
    
    quarterlyData: [
      { quarter: 'Q1 FY24', revenue: 2.1, profit: -1.8, users: 4.2 },
      { quarter: 'Q2 FY24', revenue: 2.8, profit: -1.2, users: 5.1 },
      { quarter: 'Q3 FY24', revenue: 3.5, profit: -0.9, users: 5.8 },
      { quarter: 'Q4 FY24', revenue: 4.4, profit: -0.7, users: 7.0 }
    ]
  },

  {
    id: '7',
    name: 'Bytelearn',
    logo: 'https://ui-avatars.com/api/?name=Bytelearn&background=8B5CF6&color=ffffff&size=256',
    description: 'AI-powered personalized learning platform for K-12 mathematics education',
    industry: 'EdTech',
    sector: 'K-12 Education',
    founded: '2021',
    headquarters: 'Bengaluru, Karnataka, India',
    employees: '28',
    website: 'https://bytelearn.ai',
    
    valuation: {
      current: '₹85 Cr',
      history: [
        { date: '2023-04', value: 85, round: 'Seed' },
        { date: '2022-01', value: 25, round: 'Pre-Seed' }
      ]
    },
    totalFunding: '$6.2M',
    users: '500K+ Students',
    status: 'Active',
    stage: 'Seed',
    
    financials: {
      fy24: {
        revenueFromOperations: 5.8,
        revenueStreams: {
          'B2C Subscriptions': 3.2,
          'B2B School Licenses': 2.1,
          'Premium Tutoring': 0.5
        },
        totalRevenue: 5.8,
        expenses: {
          employeeBenefitExpense: 4.5,
          technologyExpense: 2.8,
          marketingCost: 1.9,
          contentDevelopment: 1.2,
          otherExpenses: 0.8,
          totalExpense: 11.2
        },
        operatingProfit: -5.4,
        netProfitLoss: -5.6,
        previousYear: {
          totalRevenue: 1.8,
          revenueGrowth: 222.2
        }
      }
    },
    
    keyMetrics: {
      monthlyActiveUsers: '180K',
      learningEfficiencyImprovement: '45%',
      studentRetention: '82%',
      revenueGrowth: 222.2,
      avgSessionDuration: '35 mins',
      problemsSolved: '50M+',
      accuracyImprovement: '38%',
      parentSatisfactionScore: '4.6/5'
    },
    
    quarterlyData: [
      { quarter: 'Q1 FY24', revenue: 1.2, profit: -1.5, users: 0.32 },
      { quarter: 'Q2 FY24', revenue: 1.4, profit: -1.4, users: 0.38 },
      { quarter: 'Q3 FY24', revenue: 1.6, profit: -1.3, users: 0.42 },
      { quarter: 'Q4 FY24', revenue: 1.6, profit: -1.4, users: 0.5 }
    ]
  },

  {
    id: '8',
    name: 'Presentations.ai',
    logo: 'https://ui-avatars.com/api/?name=Presentations.ai&background=EF4444&color=ffffff&size=256',
    description: 'AI-powered presentation creation platform for businesses and professionals',
    industry: 'SaaS',
    sector: 'Business Productivity',
    founded: '2022',
    headquarters: 'San Francisco, CA & Bengaluru, India',
    employees: '15',
    website: 'https://presentations.ai',
    
    valuation: {
      current: '₹42 Cr',
      history: [
        { date: '2023-08', value: 42, round: 'Seed' }
      ]
    },
    totalFunding: '$2.8M',
    users: '150K+',
    status: 'Active',
    stage: 'Seed',
    
    financials: {
      fy24: {
        revenueFromOperations: 3.2,
        revenueStreams: {
          'SaaS Subscriptions': 2.8,
          'Enterprise Licenses': 0.4
        },
        totalRevenue: 3.2,
        expenses: {
          employeeBenefitExpense: 2.8,
          technologyExpense: 1.5,
          marketingCost: 0.9,
          otherExpenses: 0.6,
          totalExpense: 5.8
        },
        operatingProfit: -2.6,
        netProfitLoss: -2.8,
        previousYear: {
          totalRevenue: 0.8,
          revenueGrowth: 300
        }
      }
    },
    
    keyMetrics: {
      monthlyRecurringRevenue: '₹35L',
      churnRate: '4%',
      avgRevenuePerUser: '₹280',
      revenueGrowth: 300,
      presentationsCreated: '2M+',
      timeReduction: '75%',
      userEngagement: '89%',
      npsScore: 68
    },
    
    quarterlyData: [
      { quarter: 'Q1 FY24', revenue: 0.6, profit: -0.8, users: 0.08 },
      { quarter: 'Q2 FY24', revenue: 0.7, profit: -0.7, users: 0.11 },
      { quarter: 'Q3 FY24', revenue: 0.9, profit: -0.6, users: 0.13 },
      { quarter: 'Q4 FY24', revenue: 1.0, profit: -0.7, users: 0.15 }
    ]
  },

  {
    id: '9',
    name: 'BizzTM',
    logo: 'https://ui-avatars.com/api/?name=BizzTM&background=10B981&color=ffffff&size=256',
    description: 'B2B marketplace for industrial equipment and machinery trading',
    industry: 'B2B Marketplace',
    sector: 'Industrial Trading',
    founded: '2020',
    headquarters: 'Pune, Maharashtra, India',
    employees: '52',
    website: 'https://bizztm.com',
    
    valuation: {
      current: '₹158 Cr',
      history: [
        { date: '2023-11', value: 158, round: 'Series A' },
        { date: '2022-06', value: 48, round: 'Seed' }
      ]
    },
    totalFunding: '$12.5M',
    users: '25K+ Businesses',
    status: 'Active',
    stage: 'Series A',
    
    financials: {
      fy24: {
        revenueFromOperations: 28.5,
        revenueStreams: {
          'Commission on Sales': 22.8,
          'Subscription Fees': 3.2,
          'Logistics Services': 2.5
        },
        totalRevenue: 28.5,
        expenses: {
          employeeBenefitExpense: 8.9,
          technologyExpense: 4.2,
          marketingCost: 6.8,
          logisticsExpense: 5.2,
          otherExpenses: 3.8,
          totalExpense: 28.9
        },
        operatingProfit: -0.4,
        netProfitLoss: -1.2,
        previousYear: {
          totalRevenue: 12.8,
          revenueGrowth: 122.7
        }
      }
    },
    
    keyMetrics: {
      grossMerchandiseValue: '₹450 Cr',
      avgOrderValue: '₹2.8L',
      supplierRetention: '85%',
      buyerRetention: '78%',
      revenueGrowth: 122.7,
      catalogItems: '500K+',
      categoriesCovered: 85,
      citiesCovered: 120,
      repeatOrderRate: '65%'
    },
    
    quarterlyData: [
      { quarter: 'Q1 FY24', revenue: 5.2, profit: -0.8, users: 18 },
      { quarter: 'Q2 FY24', revenue: 6.8, profit: -0.3, users: 20 },
      { quarter: 'Q3 FY24', revenue: 7.9, profit: 0.1, users: 22 },
      { quarter: 'Q4 FY24', revenue: 8.6, profit: -0.2, users: 25 }
    ]
  },

  {
    id: '10',
    name: 'Nojoto',
    logo: 'https://ui-avatars.com/api/?name=Nojoto&background=F97316&color=ffffff&size=256',
    description: 'Social storytelling platform for creative writers and content creators',
    industry: 'Social Media',
    sector: 'Content Creation Platform',
    founded: '2017',
    headquarters: 'Gurgaon, Haryana, India',
    employees: '78',
    website: 'https://nojoto.com',
    
    valuation: {
      current: '₹95 Cr',
      history: [
        { date: '2022-12', value: 95, round: 'Series A' },
        { date: '2020-08', value: 35, round: 'Seed' }
      ]
    },
    totalFunding: '$8.8M',
    users: '15M+',
    status: 'Active',
    stage: 'Series A',
    
    financials: {
      fy24: {
        revenueFromOperations: 8.5,
        revenueStreams: {
          'Digital Advertising': 5.8,
          'Creator Monetization': 1.9,
          'Premium Subscriptions': 0.8
        },
        totalRevenue: 8.5,
        expenses: {
          employeeBenefitExpense: 12.5,
          technologyExpense: 3.2,
          marketingCost: 4.8,
          contentModeration: 1.8,
          otherExpenses: 2.5,
          totalExpense: 24.8
        },
        operatingProfit: -16.3,
        netProfitLoss: -17.2,
        previousYear: {
          totalRevenue: 4.2,
          revenueGrowth: 102.4
        }
      }
    },
    
    keyMetrics: {
      monthlyActiveUsers: '8.5M',
      dailyActiveUsers: '2.1M',
      contentPiecesPublished: '500K+/month',
      creatorEarnings: '₹12 Cr/year',
      revenueGrowth: 102.4,
      avgEngagementRate: '12.5%',
      contentViews: '2B+/month',
      userGeneratedContent: '95%',
      languagesSupported: 12
    },
    
    quarterlyData: [
      { quarter: 'Q1 FY24', revenue: 1.5, profit: -4.8, users: 12.5 },
      { quarter: 'Q2 FY24', revenue: 1.9, profit: -4.2, users: 13.2 },
      { quarter: 'Q3 FY24', revenue: 2.4, profit: -3.8, users: 14.1 },
      { quarter: 'Q4 FY24', revenue: 2.7, profit: -4.4, users: 15.0 }
    ]
  }
];

// Login credentials
const LOGIN_CREDENTIALS = {
  email: 'investor@portfolio.com',
  password: 'portfolio123'
};

// Login Component
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState(LOGIN_CREDENTIALS.email);
  const [password, setPassword] = useState(LOGIN_CREDENTIALS.password);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (email === LOGIN_CREDENTIALS.email && password === LOGIN_CREDENTIALS.password) {
        onLogin();
      } else {
        setError('Invalid email or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <LayoutDashboard className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Portfolio Dashboard</h1>
          <p className="text-slate-600 mt-2">Welcome back, please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                placeholder="investor@portfolio.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span className="text-sm text-red-700">{error}</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm text-blue-800 font-medium mb-2">Demo Credentials:</p>
          <p className="text-xs text-blue-600">Email: {LOGIN_CREDENTIALS.email}</p>
          <p className="text-xs text-blue-600">Password: {LOGIN_CREDENTIALS.password}</p>
        </div>
      </div>
    </div>
  );
};

// Enhanced Dashboard with all tabs
const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('all');
  
  // Calculate portfolio metrics
  const portfolioMetrics = {
    totalValue: portfolioCompanies.reduce((sum, company) => {
      const valuation = parseFloat(company.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', ''));
      return sum + valuation;
    }, 0),
    totalCompanies: portfolioCompanies.length,
    totalFunding: portfolioCompanies.reduce((sum, company) => {
      return sum + parseFloat(company.totalFunding.replace(/[$M]/g, ''));
    }, 0),
    avgGrowth: portfolioCompanies.reduce((sum, company) => {
      return sum + (company.keyMetrics?.revenueGrowth || 0);
    }, 0) / portfolioCompanies.length,
    profitableCompanies: portfolioCompanies.filter(company => 
      company.financials?.fy24?.netProfitLoss > 0
    ).length
  };

  const filteredCompanies = portfolioCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterIndustry === 'all' || company.industry === filterIndustry;
    return matchesSearch && matchesFilter;
  });

  const industries = [...new Set(portfolioCompanies.map(company => company.industry))];

  // Sidebar navigation items
  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', active: true },
    { id: 'companies', icon: Building2, label: 'Companies', count: portfolioCompanies.length },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'portfolio', icon: PieChart, label: 'Portfolio' },
    { id: 'financials', icon: FileBarChart, label: 'Financial Reports' },
    { id: 'performance', icon: Award, label: 'Performance' },
    { id: 'risk', icon: Shield, label: 'Risk Analysis' },
    { id: 'documents', icon: FileText, label: 'Documents' }
  ];

  useEffect(() => {
    const handleTabChange = (event) => {
      setActiveTab(event.detail);
    };
    
    window.addEventListener('changeTab', handleTabChange);
    
    return () => {
      window.removeEventListener('changeTab', handleTabChange);
    };
  }, []);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('dashboard');
    setSelectedCompany(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab companies={portfolioCompanies} metrics={portfolioMetrics} />;
      case 'companies':
        return <CompaniesTab companies={filteredCompanies} onSelectCompany={setSelectedCompany} />;
      case 'analytics':
        return <AnalyticsTab companies={portfolioCompanies} />;
      case 'portfolio':
        return <PortfolioTab companies={portfolioCompanies} metrics={portfolioMetrics} />;
      case 'financials':
        return <FinancialsTab companies={portfolioCompanies} />;
      case 'performance':
        return <PerformanceTab companies={portfolioCompanies} />;
      case 'risk':
        return <RiskAnalysisTab companies={portfolioCompanies} />;
      case 'documents':
        return <DocumentsTab companies={portfolioCompanies} />;
      default:
        return <DashboardTab companies={portfolioCompanies} metrics={portfolioMetrics} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <LayoutDashboard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Portfolio Dashboard</h1>
                  <p className="text-sm text-slate-500">Professional Investment Management</p>
                </div>
              </div>
              {(activeTab === 'companies' || activeTab === 'analytics') && (
                <div className="relative ml-8">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search companies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-80 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                  />
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-slate-400 hover:text-slate-600 relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-700">Portfolio Manager</p>
                  <p className="text-xs text-slate-500">Admin Access</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 bg-white/80 backdrop-blur-lg border-r border-slate-200 min-h-screen">
          <div className="p-6">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold">
                      {item.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* Portfolio Summary */}
            <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-200">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Portfolio Health</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-600">Total Value</span>
                  <span className="text-sm font-bold text-emerald-600">₹{portfolioMetrics.totalValue.toFixed(0)} Cr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-600">Companies</span>
                  <span className="text-sm font-bold text-blue-600">{portfolioMetrics.totalCompanies}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-600">Avg Growth</span>
                  <span className="text-sm font-bold text-purple-600">{portfolioMetrics.avgGrowth.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {renderContent()}
        </div>
      </div>

      {/* Company Detail Modal */}
      {selectedCompany && (
        <EnhancedCompanyDetailModal 
          company={selectedCompany} 
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </div>
  );
};

// Enhanced Company Detail Modal with comprehensive charts and data
const EnhancedCompanyDetailModal = ({ company, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

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
                    <RechartsPieChart>
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
                    </RechartsPieChart>
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
                      <Bar yAxisId="left" dataKey="revenue" fill="#3B82F6" name="Revenue (₹ Cr)" />
                      <Line yAxisId="left" type="monotone" dataKey="profit" stroke="#EF4444" name="Profit (₹ Cr)" strokeWidth={3} />
                      <Line yAxisId="right" type="monotone" dataKey="users" stroke="#10B981" name="Users (M)" strokeWidth={3} />
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
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
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

// Dashboard Tab Component with enhanced charts
const DashboardTab = ({ companies, metrics }) => {
  const growthData = companies.map(company => ({
    name: company.name,
    revenue: company.financials?.fy24?.totalRevenue || 0,
    growth: company.keyMetrics?.revenueGrowth || 0,
    valuation: parseFloat(company.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', ''))
  }));

  const industryData = companies.reduce((acc, company) => {
    const existing = acc.find(item => item.name === company.industry);
    if (existing) {
      existing.value += 1;
      existing.amount += parseFloat(company.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', ''));
    } else {
      acc.push({
        name: company.industry,
        value: 1,
        amount: parseFloat(company.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', '')),
        color: ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'][acc.length % 5]
      });
    }
    return acc;
  }, []);

  return (
    <div>
      {/* Enhanced Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          {
            label: 'Total Portfolio Value',
            value: `₹${metrics.totalValue.toFixed(0)} Cr`,
            change: '+12.5%',
            icon: IndianRupee,
            color: 'from-blue-500 to-blue-600',
            trend: 'up'
          },
          {
            label: 'Active Companies',
            value: metrics.totalCompanies.toString(),
            change: `${metrics.profitableCompanies} profitable`,
            icon: Building2,
            color: 'from-emerald-500 to-emerald-600',
            trend: 'up'
          },
          {
            label: 'Total Funding',
            value: `$${metrics.totalFunding.toFixed(1)}M`,
            change: '+23.1%',
            icon: TrendingUp,
            color: 'from-purple-500 to-purple-600',
            trend: 'up'
          },
          {
            label: 'Avg Growth Rate',
            value: `${metrics.avgGrowth.toFixed(1)}%`,
            change: 'YoY Revenue',
            icon: Rocket,
            color: 'from-orange-500 to-orange-600',
            trend: 'up'
          }
        ].map((metric, index) => (
          <div key={index} className="relative group">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-1">
                  {metric.trend === 'up' ? (
                    <TrendingUp size={16} className="text-emerald-500" />
                  ) : (
                    <TrendingDown size={16} className="text-red-500" />
                  )}
                  <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</h3>
              <p className="text-sm text-slate-600">{metric.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Charts Section */}
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

        {/* Industry Distribution with Enhanced Design */}
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
      </div>

      {/* Performance Leaderboard */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 mb-8">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Top Performers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top by Revenue */}
          <div>
            <h4 className="font-medium text-slate-700 mb-3 flex items-center space-x-2">
              <TrendingUp size={16} className="text-emerald-500" />
              <span>By Revenue</span>
            </h4>
            {growthData
              .sort((a, b) => b.revenue - a.revenue)
              .slice(0, 3)
              .map((company, index) => (
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
        
          {/* Top by Growth */}
          <div>
            <h4 className="font-medium text-slate-700 mb-3 flex items-center space-x-2">
              <Rocket size={16} className="text-blue-500" />
              <span>By Growth</span>
            </h4>
            {growthData
              .sort((a, b) => b.growth - a.growth)
              .slice(0, 3)
              .map((company, index) => (
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
            {growthData
              .sort((a, b) => b.valuation - a.valuation)
              .slice(0, 3)
              .map((company, index) => (
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

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { company: 'Jar', action: 'Achieved cash flow positivity', time: '2 hours ago', type: 'success' },
              { company: 'Seekho', action: 'Raised $8M Series A funding', time: '1 day ago', type: 'funding' },
              { company: 'hBits', action: 'Onboarded 50+ new hospitals', time: '2 days ago', type: 'growth' },
              { company: 'High Avenue', action: 'Crossed ₹2,800 Cr AUM milestone', time: '3 days ago', type: 'milestone' },
              { company: 'BizzTM', action: 'Launched in 5 new cities', time: '1 week ago', type: 'expansion' }
            ].map((activity, index) => (
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

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('changeTab', { detail: 'companies' }))}
              className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Building2 className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-900">View Companies</p>
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('changeTab', { detail: 'analytics' }))}
              className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-900">View Analytics</p>
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('changeTab', { detail: 'financials' }))}
              className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <FileBarChart className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-900">Financial Reports</p>
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('changeTab', { detail: 'portfolio' }))}
              className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <PieChart className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-900">Portfolio View</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Companies Tab Component
const CompaniesTab = ({ companies, onSelectCompany }) => {
  const [sortBy, setSortBy] = useState('valuation');
  const [sortOrder, setSortOrder] = useState('desc');
  const [filterStage, setFilterStage] = useState('all');

  const stages = [...new Set(companies.map(company => company.stage))];

  const filteredAndSortedCompanies = companies
    .filter(company => filterStage === 'all' || company.stage === filterStage)
    .sort((a, b) => {
      let aVal, bVal;
      switch (sortBy) {
        case 'valuation':
          aVal = parseFloat(a.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', ''));
          bVal = parseFloat(b.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', ''));
          break;
        case 'revenue':
          aVal = a.financials?.fy24?.totalRevenue || 0;
          bVal = b.financials?.fy24?.totalRevenue || 0;
          break;
        case 'growth':
          aVal = a.keyMetrics?.revenueGrowth || 0;
          bVal = b.keyMetrics?.revenueGrowth || 0;
          break;
        case 'employees':
          aVal = parseInt(a.employees);
          bVal = parseInt(b.employees);
          break;
        default:
          return 0;
      }
      return sortOrder === 'desc' ? bVal - aVal : aVal - bVal;
    });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Portfolio Companies</h1>
        <p className="text-slate-600 mt-2">Comprehensive view of all portfolio companies with detailed financials</p>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Sort By</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-slate-200 rounded-lg px-3 py-2"
              >
                <option value="valuation">Valuation</option>
                <option value="revenue">Revenue</option>
                <option value="growth">Growth Rate</option>
                <option value="employees">Team Size</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Order</label>
              <select 
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-slate-200 rounded-lg px-3 py-2"
              >
                <option value="desc">High to Low</option>
                <option value="asc">Low to High</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Filter by Stage</label>
              <select 
                value={filterStage}
                onChange={(e) => setFilterStage(e.target.value)}
                className="border border-slate-200 rounded-lg px-3 py-2"
              >
                <option value="all">All Stages</option>
                {stages.map(stage => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-sm text-slate-500">
            Showing {filteredAndSortedCompanies.length} of {companies.length} companies
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredAndSortedCompanies.map((company) => (
          <EnhancedCompanyCard 
            key={company.id} 
            company={company} 
            onSelect={onSelectCompany}
          />
        ))}
      </div>
    </div>
  );
};

// Enhanced Company Card Component
const EnhancedCompanyCard = ({ company, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Acquired': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'IPO': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getStageColor = (stage) => {
    switch (stage) {
      case 'Seed': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Series A': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Series B': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const latestFinancials = company.financials?.fy24 || {};

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="relative group">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-16 h-16 rounded-xl object-cover border border-slate-200 group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}&background=3B82F6&color=ffffff&size=64`;
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{company.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(company.status)}`}>
                    {company.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStageColor(company.stage)}`}>
                    {company.stage}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">{company.description}</p>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Building2 size={14} />
                    <span>{company.industry}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>Founded {company.founded}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>{company.employees} employees</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-2xl font-bold text-slate-900 mb-1">{company.valuation.current}</div>
                <div className="text-sm text-slate-500">Current Valuation</div>
              </div>
              
              {latestFinancials.totalRevenue && (
                <div className="text-right">
                  <div className="text-lg font-bold text-emerald-600 mb-1">₹{latestFinancials.totalRevenue} Cr</div>
                  <div className="text-sm text-slate-500">Revenue (FY24)</div>
                </div>
              )}

              {company.keyMetrics?.revenueGrowth && (
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600 mb-1">+{company.keyMetrics.revenueGrowth}%</div>
                  <div className="text-sm text-slate-500">Growth Rate</div>
                </div>
              )}
              
              <div className="flex flex-col space-y-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(company);
                  }}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Eye size={16} />
                </button>
                {isExpanded ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
              </div>
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              
              {/* Financial Highlights */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 flex items-center space-x-2">
                  <IndianRupee size={16} />
                  <span>Financial Highlights</span>
                </h4>
                {latestFinancials && (
                  <div className="space-y-3">
                    {latestFinancials.totalRevenue && (
                      <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                        <span className="text-sm text-slate-600">Total Revenue</span>
                        <span className="font-semibold text-emerald-600">₹{latestFinancials.totalRevenue} Cr</span>
                      </div>
                    )}
                    {latestFinancials.netProfitLoss && (
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm text-slate-600">Net P&L</span>
                        <span className={`font-semibold ${latestFinancials.netProfitLoss > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          ₹{latestFinancials.netProfitLoss} Cr
                        </span>
                      </div>
                    )}
                    {latestFinancials.previousYear?.revenueGrowth && (
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm text-slate-600">Revenue Growth</span>
                        <span className="font-semibold text-blue-600">+{latestFinancials.previousYear.revenueGrowth}%</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Key Metrics */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 flex items-center space-x-2">
                  <Target size={16} />
                  <span>Key Metrics</span>
                </h4>
                <div className="space-y-3">
                  {Object.entries(company.keyMetrics || {}).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-semibold text-slate-900">
                        {typeof value === 'string' ? value : `${value}${key.includes('Rate') || key.includes('Margin') || key.includes('Growth') ? '%' : ''}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 flex items-center space-x-2">
                  <Users size={16} />
                  <span>Leadership Team</span>
                </h4>
                <div className="space-y-3">
                  {company.team?.slice(0, 3).map((member, index) => (
                    <div key={index} className="p-3 bg-slate-50 rounded-lg">
                      <p className="font-medium text-slate-900 text-sm">{member.name}</p>
                      <p className="text-xs text-slate-600">{member.designation}</p>
                      <p className="text-xs text-slate-500 mt-1">{member.experience}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market & Investment Info */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 flex items-center space-x-2">
                  <TrendingUp size={16} />
                  <span>Investment Info</span>
                </h4>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-slate-600">Total Funding</p>
                    <p className="font-semibold text-blue-600">{company.totalFunding}</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-slate-600">Users/Customers</p>
                    <p className="font-semibold text-purple-600">{company.users}</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-slate-600">Market Share</p>
                    <p className="font-semibold text-orange-600">{company.marketAnalysis?.marketShare || 'N/A'}</p>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-slate-600">Lead Investor</p>
                    <p className="font-semibold text-emerald-600 text-xs">{company.leadInvestors?.[0]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <a href={company.website} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                  <Globe size={16} />
                  <span>Website</span>
                  <ExternalLink size={12} />
                </a>
                <a href={company.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} />
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => onSelect(company)}
                  className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Detailed View
                </button>
                <button 
                  onClick={() => {
                    const reportData = {
                      companyName: company.name,
                      valuation: company.valuation.current,
                      revenue: company.financials?.fy24?.totalRevenue || 'N/A',
                      growth: company.financials?.fy24?.previousYear?.revenueGrowth || 'N/A',
                      stage: company.stage,
                      employees: company.employees,
                      generatedAt: new Date().toLocaleString()
                    };
                    
                    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(reportData, null, 2));
                    const downloadAnchorNode = document.createElement('a');
                    downloadAnchorNode.setAttribute("href", dataStr);
                    downloadAnchorNode.setAttribute("download", `${company.name}_Quick_Report.json`);
                    document.body.appendChild(downloadAnchorNode);
                    downloadAnchorNode.click();
                    downloadAnchorNode.remove();
                  }}
                  className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Download Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

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

// New Financial Reports Tab
const FinancialsTab = ({ companies }) => {
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [selectedReport, setSelectedReport] = useState('consolidated');

  const generateConsolidatedFinancials = () => {
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

  const consolidatedData = generateConsolidatedFinancials();

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
                <RechartsPieChart>
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
                </RechartsPieChart>
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
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-blue-600 mb-1">2.8x</h4>
              <p className="text-sm text-blue-700 font-medium">Average Multiple</p>
              <p className="text-xs text-blue-600 mt-1">Cash-on-cash return</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
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

// Enhanced Risk Analysis Tab
const RiskAnalysisTab = ({ companies }) => {
  const calculateRiskScore = (company) => {
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
            <Gauge size={32} />
          </div>
        </div>
      </div>

      {/* Risk Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Risk Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPieChart>
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
            </RechartsPieChart>
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

// Documents Tab Component
const DocumentsTab = ({ companies }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // ADD THESE NEW STATE VARIABLES
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    companyName: '',
    category: 'financial',
    file: null
  });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  // ADD DOCUMENTS STATE (to make it dynamic)
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Jar - Financial Statements FY24', category: 'financial', company: 'Jar', date: '2024-03-31', size: '2.4 MB', type: 'PDF' },
    { id: 2, name: 'hBits - Board Resolution Q4', category: 'board', company: 'hBits', date: '2024-03-15', size: '1.2 MB', type: 'PDF' },
    { id: 3, name: 'High Avenue - Investment Agreement', category: 'legal', company: 'High Avenue', date: '2024-02-28', size: '3.1 MB', type: 'PDF' },
    { id: 4, name: 'Monrow - Compliance Report', category: 'compliance', company: 'Monrow', date: '2024-03-20', size: '1.8 MB', type: 'PDF' },
    { id: 5, name: 'Seekho - Due Diligence Report', category: 'financial', company: 'Seekho', date: '2024-03-10', size: '4.2 MB', type: 'PDF' },
    { id: 6, name: 'BizzTM - Series A Term Sheet', category: 'legal', company: 'BizzTM', date: '2024-01-15', size: '0.8 MB', type: 'PDF' },
    { id: 7, name: 'Nojoto - Annual Board Meeting Minutes', category: 'board', company: 'Nojoto', date: '2024-02-05', size: '1.5 MB', type: 'PDF' }
  ]);

  const documentCategories = [
    { id: 'all', name: 'All Documents', icon: FileText },
    { id: 'financial', name: 'Financial', icon: FileBarChart },
    { id: 'legal', name: 'Legal', icon: FileText },
    { id: 'compliance', name: 'Compliance', icon: CheckCircle },
    { id: 'board', name: 'Board Materials', icon: Users }
  ];

  // ADD THESE HANDLER FUNCTIONS
  const handleUploadClick = () => {
    setShowUploadModal(true);
    setUploadError('');
    setUploadForm({
      companyName: '',
      category: 'financial',
      file: null
    });
  };

  const handleCloseModal = () => {
    setShowUploadModal(false);
    setUploadForm({
      companyName: '',
      category: 'financial',
      file: null
    });
    setUploadError('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setUploadError('File size must be less than 10MB');
        return;
      }
      
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        setUploadError('Please upload PDF, DOC, DOCX, JPG, or PNG files only');
        return;
      }

      setUploadForm(prev => ({ ...prev, file }));
      setUploadError('');
    }
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!uploadForm.companyName.trim()) {
      setUploadError('Please enter a company name');
      return;
    }
    
    if (!uploadForm.file) {
      setUploadError('Please select a file to upload');
      return;
    }

    setIsUploading(true);
    setUploadError('');

    try {
      // Simulate upload process (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create new document object
      const newDocument = {
        id: documents.length + 1,
        name: `${uploadForm.companyName} - ${uploadForm.file.name}`,
        category: uploadForm.category,
        company: uploadForm.companyName,
        date: new Date().toISOString().split('T')[0],
        size: (uploadForm.file.size / (1024 * 1024)).toFixed(1) + ' MB',
        type: uploadForm.file.type.includes('pdf') ? 'PDF' : 
              uploadForm.file.type.includes('word') ? 'DOC' : 
              uploadForm.file.type.includes('image') ? 'IMG' : 'FILE'
      };

      // Add to documents list at the beginning (most recent first)
      setDocuments(prev => [newDocument, ...prev]);
      
      // Close modal and reset form
      handleCloseModal();
      
      // Optional: Show success message
      alert('Document uploaded successfully!');
      
    } catch (error) {
      setUploadError('Upload failed. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Document Management</h1>
        <p className="text-slate-600 mt-2">Centralized repository for all portfolio company documents</p>
      </div>

      {/* Document Categories and Search */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {documentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <category.icon size={16} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* UPDATED UPLOAD BUTTON */}
            <button 
              onClick={handleUploadClick}
              className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <Plus size={16} />
              <span>Upload</span>
            </button>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-slate-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900">
              Documents ({filteredDocuments.length})
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Document Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Company</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDocuments.map((doc) => (
                  <tr key={doc.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-red-500" />
                        <span className="font-medium text-slate-900">{doc.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{doc.company}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        doc.category === 'financial' ? 'bg-blue-100 text-blue-800' :
                        doc.category === 'legal' ? 'bg-purple-100 text-purple-800' :
                        doc.category === 'compliance' ? 'bg-emerald-100 text-emerald-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {doc.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{doc.date}</td>
                    <td className="py-3 px-4 text-slate-600">{doc.size}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          <Eye size={16} />
                        </button>
                        <button className="text-emerald-600 hover:text-emerald-800 text-sm">
                          <Download size={16} />
                        </button>
                        <button className="text-slate-600 hover:text-slate-800 text-sm">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-800 text-sm">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ADD UPLOAD MODAL */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Upload Document</h2>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  disabled={isUploading}
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <form onSubmit={handleUploadSubmit} className="p-6">
              <div className="space-y-4">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <select
                    value={uploadForm.companyName}
                    onChange={(e) => setUploadForm(prev => ({ ...prev, companyName: e.target.value }))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    disabled={isUploading}
                  >
                    <option value="">Select a company</option>
                    {companies.map((company, index) => (
                      <option key={index} value={company.name}>
                        {company.name}
                      </option>
                    ))}
                    <option value="Other">Other (Custom)</option>
                  </select>
                  
                  {/* If "Other" is selected, show text input */}
                  {uploadForm.companyName === 'Other' && (
                    <input
                      type="text"
                      placeholder="Enter company name"
                      onChange={(e) => setUploadForm(prev => ({ ...prev, companyName: e.target.value }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-2"
                      required
                      disabled={isUploading}
                    />
                  )}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Document Category *
                  </label>
                  <select
                    value={uploadForm.category}
                    onChange={(e) => setUploadForm(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    disabled={isUploading}
                  >
                    <option value="financial">Financial</option>
                    <option value="legal">Legal</option>
                    <option value="compliance">Compliance</option>
                    <option value="board">Board Materials</option>
                  </select>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Select Document *
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="hidden"
                      id="file-upload"
                      disabled={isUploading}
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <UploadIcon size={40} className="mx-auto text-slate-400 mb-2" />
                      <p className="text-sm text-slate-600 mb-1">
                        {uploadForm.file ? uploadForm.file.name : "Click to select a file or drag & drop"}
                      </p>
                      <p className="text-xs text-slate-500">
                        Supports: PDF, DOC, DOCX, JPG, PNG (max 10MB)
                      </p>
                    </label>
                  </div>
                </div>

                {/* Error Message */}
                {uploadError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-700">{uploadError}</span>
                    </div>
                  </div>
                )}

                {/* Upload Progress */}
                {isUploading && (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                      <span className="text-sm text-blue-700">Uploading document...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end space-x-3 mt-6 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
                  disabled={isUploading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUploading || !uploadForm.companyName || !uploadForm.file}
                  className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isUploading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Uploading...</span>
                    </>
                  ) : (
                    <>
                      <UploadIcon size={16} />
                      <span>Upload Document</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
