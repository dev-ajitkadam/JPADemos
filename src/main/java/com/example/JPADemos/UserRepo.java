package com.example.JPADemos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepo extends JpaRepository<Userdata, Long> {
    List<Userdata> findByNumber(long number); // Custom query method
}
