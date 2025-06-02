package com.example.demo.controller;

import com.example.demo.model.user;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public user register(@RequestBody user user) {
        return userService.register(user);
    }
}
