package com.example.demo.service;

import com.example.demo.model.expense;
import com.example.demo.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {
    @Autowired
    private ExpenseRepository expenseRepository;

    public expense submitExpense(expense expense) {
        return expenseRepository.save(expense);
    }

    public List<expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    public expense updateExpenseStatus(Long id, String status) {
        expense expense = expenseRepository.findById(id).orElseThrow();
        expense.setStatus(status);
        return expenseRepository.save(expense);
    }
}

