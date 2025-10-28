import React, { useState } from 'react';

const SetBudgetModal = ({ onClose, onSubmit }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const categories = [
    { name: 'Food', icon: '🍔' },
    { name: 'Transport', icon: '🚗' },
    { name: 'Shopping', icon: '🛍️' },
    { name: 'Bills', icon: '💡' },
    { name: 'Entertainment', icon: '🎬' },
    { name: 'Health', icon: '🏥' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSubmit({
      category,
      amount: parseFloat(amount)
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
          <h2 className="modal-title">Set Budget</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select category</option>
              {categories.map(cat => (
                <option key={cat.name} value={cat.name}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Monthly Budget (Rs.)</label>
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

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Set Budget
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetBudgetModal;
