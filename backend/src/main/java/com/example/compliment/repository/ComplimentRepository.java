package com.example.compliment.repository;

import com.example.compliment.model.Compliment;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ComplimentRepository extends MongoRepository<Compliment, String> {
    List<Compliment> findByMood(String mood);
}

