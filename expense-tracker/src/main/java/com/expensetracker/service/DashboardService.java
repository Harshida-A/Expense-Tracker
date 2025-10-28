package com.expensetracker.service;

import com.expensetracker.model.Budget;
import com.expensetracker.model.DashboardSummary;
import com.expensetracker.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class DashboardService {
    
    @Autowired
    private TransactionService transactionService;
    
    @Autowired
    private BudgetService budgetService;
    
    public DashboardSummary getDashboardSummary(String userId) {
        DashboardSummary summary = new DashboardSummary();
        
  
        Double totalIncome = transactionService.getTotalByType(userId, "income");
        Double totalExpense = transactionService.getTotalByType(userId, "expense");
        Double balance = totalIncome - totalExpense;
        Double savingsRate = totalIncome > 0 ? (balance / totalIncome) * 100 : 0;
        
        summary.setTotalIncome(totalIncome);
        summary.setTotalExpense(totalExpense);
        summary.setBalance(balance);
        summary.setSavingsRate(savingsRate);
        
        List<Transaction> allTransactions = transactionService.getAllTransactions(userId);
        summary.setRecentTransactions(allTransactions.stream()
                .limit(10)
                .collect(Collectors.toList()));
        
        List<Budget> budgets = budgetService.getAllBudgets(userId);
        Map<String, DashboardSummary.BudgetStatus> budgetStatusMap = new HashMap<>();
        
        for (Budget budget : budgets) {
            List<Transaction> categoryTransactions = allTransactions.stream()
                    .filter(t -> "expense".equals(t.getType()) && 
                                 budget.getCategory().equals(t.getCategory()))
                    .collect(Collectors.toList());
            
            Double spent = categoryTransactions.stream()
                    .mapToDouble(Transaction::getAmount)
                    .sum();
            
            DashboardSummary.BudgetStatus status = new DashboardSummary.BudgetStatus();
            status.setCategory(budget.getCategory());
            status.setBudgetAmount(budget.getAmount());
            status.setSpentAmount(spent);
            status.setPercentage((spent / budget.getAmount()) * 100);
            
            budgetStatusMap.put(budget.getCategory(), status);
        }
        
        summary.setBudgetStatus(budgetStatusMap);
        
        return summary;
    }
}
