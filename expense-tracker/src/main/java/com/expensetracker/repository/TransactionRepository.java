package com.expensetracker.repository;

import com.expensetracker.model.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface TransactionRepository extends MongoRepository<Transaction, String> {
    List<Transaction> findByUserIdOrderByDateDesc(String userId);
    List<Transaction> findByUserIdAndType(String userId, String type);
    List<Transaction> findByUserIdAndDateBetween(String userId, LocalDate startDate, LocalDate endDate);
    List<Transaction> findByUserIdAndCategory(String userId, String category);
}
