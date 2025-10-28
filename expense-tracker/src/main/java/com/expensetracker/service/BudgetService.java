package com.expensetracker.service;

import com.expensetracker.model.Budget;
import com.expensetracker.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BudgetService {
    
    @Autowired
    private BudgetRepository budgetRepository;
    
    public List<Budget> getAllBudgets(String userId) {
        return budgetRepository.findByUserId(userId);
    }
    
    public Budget setBudget(Budget budget) {
        Optional<Budget> existing = budgetRepository.findByUserIdAndCategory(
            budget.getUserId(), budget.getCategory());
        
        if (existing.isPresent()) {
            Budget existingBudget = existing.get();
            existingBudget.setAmount(budget.getAmount());
            return budgetRepository.save(existingBudget);
        }
        
        return budgetRepository.save(budget);
    }
    
    public void deleteBudget(String id) {
        budgetRepository.deleteById(id);
    }
}
