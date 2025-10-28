import React, { useState, useEffect } from 'react';
import { dashboardAPI, transactionAPI, budgetAPI } from '../services/api';
import SummaryCards from './SummaryCards';
import TransactionList from './TransactionList';
import BudgetOverview from './BudgetOverview';
import AddTransactionModal from './AddTransactionModal';
import SetBudgetModal from './SetBudgetModal';
import Toast from './Toast';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [dashResponse, transResponse, budgetResponse] = await Promise.all([
        dashboardAPI.getDashboard(),
        transactionAPI.getAll(),
        budgetAPI.getAll()
      ]);
      
      setDashboardData(dashResponse.data);
      setTransactions(transResponse.data);
      setBudgets(budgetResponse.data);
    } catch (error) {
      console.error('Error loading data:', error);
      showToast('Failed to load data. Please check your backend connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTransaction = async (transaction) => {
    try {
      await transactionAPI.create(transaction);
      await loadData();
      setShowAddModal(false);
      showToast('Transaction added successfully!');
    } catch (error) {
      console.error('Error adding transaction:', error);
      showToast('Failed to add transaction');
    }
  };

  const handleDeleteTransaction = async (id) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      try {
        await transactionAPI.delete(id);
        await loadData();
        showToast('Transaction deleted');
      } catch (error) {
        console.error('Error deleting transaction:', error);
        showToast('Failed to delete transaction');
      }
    }
  };

  const handleSetBudget = async (budget) => {
    try {
      await budgetAPI.set(budget);
      await loadData();
      setShowBudgetModal(false);
      showToast('Budget set successfully!');
    } catch (error) {
      console.error('Error setting budget:', error);
      showToast('Failed to set budget');
    }
  };

  const handleExport = () => {
    const data = {
      transactions: transactions,
      budgets: budgets,
      summary: dashboardData,
      exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `expense-tracker-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showToast('Data exported successfully!');
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const getFilteredTransactions = () => {
    if (filter === 'all') return transactions;
    return transactions.filter(t => t.type.toLowerCase() === filter);
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontSize: '18px',
        color: 'var(--color-text-secondary)'
      }}>
        Loading your expense tracker...
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <div className="greeting">Expense Tracker</div>
        <div className="header-actions">
          <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
            + Add Transaction
          </button>
          <button className="icon-btn" onClick={handleExport} title="Export Data">
            📥
          </button>
        </div>
      </div>

      <div className="dashboard-grid">
        <SummaryCards data={dashboardData} />
        
        <TransactionList
          transactions={getFilteredTransactions()}
          filter={filter}
          onFilterChange={setFilter}
          onDelete={handleDeleteTransaction}
        />
        
        <BudgetOverview
          budgets={budgets}
          transactions={transactions}
          onOpenBudgetModal={() => setShowBudgetModal(true)}
        />
      </div>

      {showAddModal && (
        <AddTransactionModal
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddTransaction}
        />
      )}

      {showBudgetModal && (
        <SetBudgetModal
          onClose={() => setShowBudgetModal(false)}
          onSubmit={handleSetBudget}
        />
      )}

      {toast.show && <Toast message={toast.message} />}
    </div>
  );
};

export default Dashboard;
