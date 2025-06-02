package com.example.demo.repository;

import com.example.demo.model.expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<expense, Long> {
    List<expense> findByEmployeeId(Long employeeId);
}
