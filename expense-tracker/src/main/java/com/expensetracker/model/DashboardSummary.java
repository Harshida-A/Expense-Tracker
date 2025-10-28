package com.expensetracker.model;

import lombok.Data;
import java.util.List;
import java.util.Map;

@Data
public class DashboardSummary {
    private Double totalIncome;
    private Double totalExpense;
    private Double balance;
    private Double savingsRate;
    private List<Transaction> recentTransactions;
    private Map<String, BudgetStatus> budgetStatus;
    
    @Data
    public static class BudgetStatus {
        private String category;
        private Double budgetAmount;
        private Double spentAmount;
        private Double percentage;
    }
}
