import React from 'react';

const SummaryCards = ({ data }) => {
  const formatCurrency = (amount) => {
    if (!amount) return 'Rs.0.00';
    return 'Rs.' + amount.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  return (
    <>
      {/* Income Card */}
      <div className="card summary-card">
        <div className="card-header">
          <span className="card-title">Total Income</span>
        </div>
        <div className="summary-amount">{formatCurrency(data?.totalIncome)}</div>
        <span className="summary-change change-positive">Total Income</span>
      </div>

      {/* Expense Card */}
      <div className="card summary-card">
        <div className="card-header">
          <span className="card-title">Total Expenses</span>
        </div>
        <div className="summary-amount">{formatCurrency(data?.totalExpense)}</div>
        <span className="summary-change change-negative">Total Expense</span>
      </div>

      {/* Balance Card */}
      <div className="card summary-card">
        <div className="card-header">
          <span className="card-title">Balance</span>
        </div>
        <div className="summary-amount">{formatCurrency(data?.balance)}</div>
        <span className="summary-change">Current balance</span>
      </div>

      {/* Savings Rate Card */}
      <div className="card summary-card">
        <div className="card-header">
          <span className="card-title">Savings Rate</span>
        </div>
        <div className="summary-amount">{data?.savingsRate?.toFixed(1)}%</div>
        <span className="summary-change">Of income saved</span>
      </div>
    </>
  );
};

export default SummaryCards;
