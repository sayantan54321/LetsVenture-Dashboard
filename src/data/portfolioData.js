export const portfolioCompanies = [
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

export const LOGIN_CREDENTIALS = {
  email: 'investor@portfolio.com',
  password: 'portfolio123'
};