package com.expensetracker.service;

import com.expensetracker.model.Transaction;
import com.expensetracker.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class TransactionService {
    
    @Autowired
    private TransactionRepository transactionRepository;
    
    public List<Transaction> getAllTransactions(String userId) {
        return transactionRepository.findByUserIdOrderByDateDesc(userId);
    }
    
    public List<Transaction> getTransactionsByType(String userId, String type) {
        return transactionRepository.findByUserIdAndType(userId, type);
    }
    
    public Transaction createTransaction(Transaction transaction) {
        transaction.setCreatedAt(LocalDateTime.now());
        transaction.setUpdatedAt(LocalDateTime.now());
        return transactionRepository.save(transaction);
    }
    
    public Transaction updateTransaction(String id, Transaction transaction) {
        transaction.setId(id);
        transaction.setUpdatedAt(LocalDateTime.now());
        return transactionRepository.save(transaction);
    }
    
    public void deleteTransaction(String id) {
        transactionRepository.deleteById(id);
    }
    
    public Double getTotalByType(String userId, String type) {
        List<Transaction> transactions = transactionRepository.findByUserIdAndType(userId, type);
        return transactions.stream()
                .mapToDouble(Transaction::getAmount)
                .sum();
    }
}
