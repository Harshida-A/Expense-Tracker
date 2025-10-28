import React from 'react';

const TransactionList = ({ transactions, filter, onFilterChange, onDelete }) => {
  const formatCurrency = (amount) => {
    return 'Rs.' + amount.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleFilterClick = (newFilter) => {
    onFilterChange(newFilter);
  };

  return (
    <div className="card transactions-card">
      <div className="transactions-header">
        <span className="card-title">Recent Transactions</span>
        <div className="filter-tabs">
          <button 
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button 
            className={`filter-tab ${filter === 'income' ? 'active' : ''}`}
            onClick={() => handleFilterClick('income')}
          >
            Income
          </button>
          <button 
            className={`filter-tab ${filter === 'expense' ? 'active' : ''}`}
            onClick={() => handleFilterClick('expense')}
          >
            Expenses
          </button>
        </div>
      </div>
      <div className="transaction-list">
        {transactions.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: 'var(--space-32)', 
            color: 'var(--color-text-secondary)' 
          }}>
            No transactions found
          </div>
        ) : (
          transactions.map(t => (
            <div 
              key={t.id} 
              className="transaction-item" 
              onClick={() => onDelete(t.id)}
              title="Click to delete"
            >
              <div className="transaction-left">
                <div className={`transaction-icon ${t.type.toLowerCase()}`}>
                  {t.icon || '💰'}
                </div>
                <div className="transaction-details">
                  <h4>{t.description}</h4>
                  <p>{t.category} • {formatDate(t.date || t.transactionDate)}</p>
                </div>
              </div>
              <div className={`transaction-amount ${t.type.toLowerCase()}`}>
                {t.type.toLowerCase() === 'income' ? '+' : '-'}
                {formatCurrency(t.amount)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionList;
