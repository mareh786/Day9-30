package com.example.compliment.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "compliments")
public class Compliment {
    @Id
    private String id;
    private String mood;
    private String text;

    public Compliment() {}

    public Compliment(String mood, String text) {
        this.mood = mood;
        this.text = text;
    }

    public String getMood() { return mood; }
    public String getText() { return text; }
}

// File: repository/ComplimentRepository.java
package com.example.compliment.repository;

import com.example.compliment.model.Compliment;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ComplimentRepository extends MongoRepository<Compliment, String> {
    List<Compliment> findByMood(String mood);
}

