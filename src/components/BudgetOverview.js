import React from 'react';

const BudgetOverview = ({ budgets, transactions, onOpenBudgetModal }) => {
  const formatCurrency = (amount) => {
    return 'Rs.' + amount.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  const calculateSpent = (category) => {
    return transactions
      .filter(t => t.type.toLowerCase() === 'expense' && t.category === category)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getBudgetStatus = (spent, budget) => {
    const percentage = (spent / budget) * 100;
    if (percentage >= 100) return 'danger';
    if (percentage >= 80) return 'warning';
    return 'good';
  };

  return (
    <div className="card budget-card">
      <div className="card-header">
        <span className="card-title">Budget Overview</span>
        <button className="btn btn-secondary" onClick={onOpenBudgetModal}>
          Set Budget
        </button>
      </div>
      <div>
        {budgets.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: 'var(--space-16)', 
            color: 'var(--color-text-secondary)', 
            fontSize: 'var(--font-size-sm)' 
          }}>
            Set budgets to track your spending
          </div>
        ) : (
          budgets.map(budget => {
            const spent = calculateSpent(budget.category);
            const percentage = Math.min((spent / budget.amount) * 100, 100);
            const status = getBudgetStatus(spent, budget.amount);

            return (
              <div key={budget.id} className="budget-item">
                <div className="budget-header">
                  <span className="budget-label">{budget.category}</span>
                  <span className="budget-amount">
                    {formatCurrency(spent)} / {formatCurrency(budget.amount)}
                  </span>
                </div>
                <div className="budget-bar">
                  <div 
                    className={`budget-fill ${status}`} 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BudgetOverview;
