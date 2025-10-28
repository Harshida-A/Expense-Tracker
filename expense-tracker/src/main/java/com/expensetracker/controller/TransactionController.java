package com.expensetracker.controller;

import com.expensetracker.model.Transaction;
import com.expensetracker.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class TransactionController {
    
    @Autowired
    private TransactionService transactionService;
    
    @GetMapping("/{userId}")
    public ResponseEntity<List<Transaction>> getAllTransactions(@PathVariable String userId) {
        return ResponseEntity.ok(transactionService.getAllTransactions(userId));
    }
    
    @GetMapping("/{userId}/type/{type}")
    public ResponseEntity<List<Transaction>> getTransactionsByType(
            @PathVariable String userId,
            @PathVariable String type) {
        return ResponseEntity.ok(transactionService.getTransactionsByType(userId, type));
    }
    
    @PostMapping
    public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction) {
        return ResponseEntity.ok(transactionService.createTransaction(transaction));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Transaction> updateTransaction(
            @PathVariable String id,
            @RequestBody Transaction transaction) {
        return ResponseEntity.ok(transactionService.updateTransaction(id, transaction));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable String id) {
        transactionService.deleteTransaction(id);
        return ResponseEntity.ok().build();
    }
}
