package org.launchcode.CoffeeShopDigital.model;

public abstract class Purchasable {

    private String name = this.getClass().toString();
    private String description;
    private double price;
    private int quantity = 1;


    @Override
    public String toString() {
        return String.format("%1d\t%2s\t=\t$ %3f", getQuantity(), getName(), getPrice()*getQuantity());
    }


    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
