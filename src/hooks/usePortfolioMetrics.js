import { useMemo } from 'react';

export const usePortfolioMetrics = (companies) => {
  return useMemo(() => {
    if (!companies || companies.length === 0) {
      return {
        totalValue: 0,
        totalCompanies: 0,
        totalFunding: 0,
        avgGrowth: 0,
        profitableCompanies: 0
      };
    }

    const totalValue = companies.reduce((sum, company) => {
      const valuation = parseFloat(company.valuation.current.replace(/[₹$,]/g, '').replace('Cr', '').replace('M', ''));
      return sum + valuation;
    }, 0);

    const totalCompanies = companies.length;
    
    const totalFunding = companies.reduce((sum, company) => {
      return sum + parseFloat(company.totalFunding.replace(/[$M]/g, ''));
    }, 0);
    
    const avgGrowth = companies.reduce((sum, company) => {
      return sum + (company.keyMetrics?.revenueGrowth || 0);
    }, 0) / companies.length;
    
    const profitableCompanies = companies.filter(company => 
      company.financials?.fy24?.netProfitLoss > 0
    ).length;

    return {
      totalValue,
      totalCompanies,
      totalFunding,
      avgGrowth,
      profitableCompanies
    };
  }, [companies]);
};