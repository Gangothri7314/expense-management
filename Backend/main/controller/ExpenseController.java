package com.example.demo.controller;

import com.example.demo.model.expense;
import com.example.demo.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expenses")
public class ExpenseController {
    @Autowired
    private ExpenseService ExpenseService;

    @PostMapping("/submit")
    public expense submitExpense(@RequestBody expense expense) {
        return ExpenseService.submitExpense(expense);
    }

    @GetMapping
    public List<expense> getAllExpenses() {
        return ExpenseService.getAllExpenses();
    }

    @PutMapping("/{id}/status")
    public expense updateExpenseStatus(@PathVariable Long id, @RequestParam String status) {
        return ExpenseService.updateExpenseStatus(id, status);
    }
}
