package com.expensetracker.controller;

import com.expensetracker.model.DashboardSummary;
import com.expensetracker.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class DashboardController {
    
    @Autowired
    private DashboardService dashboardService;
    
    @GetMapping("/{userId}")
    public ResponseEntity<DashboardSummary> getDashboard(@PathVariable String userId) {
        return ResponseEntity.ok(dashboardService.getDashboardSummary(userId));
    }
}
