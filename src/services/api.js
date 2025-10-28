import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';
const USER_ID = 'user123';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const dashboardAPI = {
  getDashboard: () => api.get(`/dashboard/${USER_ID}`),
};

export const transactionAPI = {
  getAll: () => api.get(`/transactions/${USER_ID}`),
  getByType: (type) => api.get(`/transactions/${USER_ID}/type/${type}`),
  create: (transaction) => api.post('/transactions', { ...transaction, userId: USER_ID }),
  update: (id, transaction) => api.put(`/transactions/${id}`, transaction),
  delete: (id) => api.delete(`/transactions/${id}`),
};

export const budgetAPI = {
  getAll: () => api.get(`/budgets/${USER_ID}`),
  set: (budget) => api.post('/budgets', { ...budget, userId: USER_ID }),
  delete: (id) => api.delete(`/budgets/${id}`),
};

export default api;
