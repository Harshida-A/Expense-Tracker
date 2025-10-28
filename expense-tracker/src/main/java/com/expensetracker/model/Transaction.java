package com.expensetracker.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Document(collection = "transactions")
public class Transaction {
    @Id
    private String id;
    private String userId;
    private String type; // INCOME, EXPENSE
    private String category;
    private String description;
    private Double amount;
    private LocalDate date;
    private String icon;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
