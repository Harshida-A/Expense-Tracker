import React, { useState } from 'react';

const AddTransactionModal = ({ onClose, onSubmit }) => {
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const categories = {
    expense: [
      { name: 'Food', icon: '🍔' },
      { name: 'Transport', icon: '🚗' },
      { name: 'Shopping', icon: '🛍️' },
      { name: 'Bills', icon: '💡' },
      { name: 'Entertainment', icon: '🎬' },
      { name: 'Health', icon: '🏥' }
    ],
    income: [
      { name: 'Salary', icon: '💰' },
      { name: 'Freelance', icon: '💼' },
      { name: 'Investment', icon: '📈' },
      { name: 'Gift', icon: '🎁' },
      { name: 'Other', icon: '💵' }
    ]
  };

  const handleTypeChange = (newType) => {
    setType(newType);
    setCategory('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!category) {
      alert('Please select a category');
      return;
    }

    const selectedCat = categories[type].find(c => c.name === category);
    
    onSubmit({
        type: type,
        category,
        description,
        amount: parseFloat(amount),
        date,
        icon: selectedCat?.icon || '💰'
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay active') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay active" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">Add Transaction</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div className="type-toggle">
          <button 
            className={`type-btn expense ${type === 'expense' ? 'active' : ''}`}
            onClick={() => handleTypeChange('expense')}
          >
            Expense
          </button>
          <button 
            className={`type-btn income ${type === 'income' ? 'active' : ''}`}
            onClick={() => handleTypeChange('income')}
          >
            Income
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Category</label>
            <div className="category-grid">
              {categories[type].map(cat => (
                <div
                  key={cat.name}
                  className={`category-btn ${category === cat.name ? 'selected' : ''}`}
                  onClick={() => setCategory(cat.name)}
                >
                  <div>{cat.icon}</div>
                  <div className="category-name">{cat.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="e.g., Grocery shopping"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Amount (Rs.)</label>
            <input
              type="number"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              step="0.01"
              required
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;
