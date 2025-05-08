package com.example.compliment.controller;

import com.example.compliment.model.Compliment;
import com.example.compliment.model.UserRequest;
import com.example.compliment.repository.ComplimentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ComplimentController {

    @Autowired
    private ComplimentRepository repository;

    @PostMapping("/compliment")
    public String getCompliment(@RequestBody UserRequest request) {
        List<Compliment> compliments = repository.findByMood(request.getMood().toLowerCase());
        if (compliments.isEmpty()) {
            return "Hi " + request.getName() + ", you're awesome just as you are!";
        }
        Compliment chosen = compliments.get(new Random().nextInt(compliments.size()));
        return "Hi " + request.getName() + ", " + chosen.getText();
    }
}
