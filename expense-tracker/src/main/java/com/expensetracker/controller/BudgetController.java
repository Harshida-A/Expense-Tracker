package com.expensetracker.controller;

import com.expensetracker.model.Budget;
import com.expensetracker.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/budgets")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class BudgetController {
    
    @Autowired
    private BudgetService budgetService;
    
    @GetMapping("/{userId}")
    public ResponseEntity<List<Budget>> getAllBudgets(@PathVariable String userId) {
        return ResponseEntity.ok(budgetService.getAllBudgets(userId));
    }
    
    @PostMapping
    public ResponseEntity<Budget> setBudget(@RequestBody Budget budget) {
        return ResponseEntity.ok(budgetService.setBudget(budget));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBudget(@PathVariable String id) {
        budgetService.deleteBudget(id);
        return ResponseEntity.ok().build();
    }
}
