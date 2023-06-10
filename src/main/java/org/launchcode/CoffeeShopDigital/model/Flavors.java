package org.launchcode.CoffeeShopDigital.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Flavors {
    @javax.persistence.Id
    @GeneratedValue
    private int Id;
    private String name;

    public Flavors() {
    }

    public Flavors(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
