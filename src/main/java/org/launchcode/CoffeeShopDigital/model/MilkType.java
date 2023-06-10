package org.launchcode.CoffeeShopDigital.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class MilkType {
    @Id
    @GeneratedValue
    private int Id;

    private String name;

    public MilkType(String name) {
        this.name = name;
    }

    public MilkType() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
