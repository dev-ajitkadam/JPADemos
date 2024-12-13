package com.example.JPADemos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Userdata {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private long number;
    private int totakTimeTaken;
    private int attemptedQ;
    private int correctA;
    private float persentage;


    public Userdata() {
    }

    public Userdata(long id, String name, long number, int totakTimeTaken, int attemptedQ, int correctA, float persentage) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.totakTimeTaken = totakTimeTaken;
        this.attemptedQ = attemptedQ;
        this.correctA = correctA;
        this.persentage = persentage;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getNumber() {
        return number;
    }

    public void setNumber(long number) {
        this.number = number;
    }

    public int getTotakTimeTaken() {
        return totakTimeTaken;
    }

    public void setTotakTimeTaken(int totakTimeTaken) {
        this.totakTimeTaken = totakTimeTaken;
    }

    public int getAttemptedQ() {
        return attemptedQ;
    }

    public void setAttemptedQ(int attemptedQ) {
        this.attemptedQ = attemptedQ;
    }

    public int getCorrectA() {
        return correctA;
    }

    public void setCorrectA(int correctA) {
        this.correctA = correctA;
    }

    public float getPersentage() {
        return persentage;
    }

    public void setPersentage(float persentage) {
        this.persentage = persentage;
    }
}
