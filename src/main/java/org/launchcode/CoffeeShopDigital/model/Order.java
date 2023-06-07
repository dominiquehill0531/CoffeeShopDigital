package org.launchcode.CoffeeShopDigital.model;

import org.launchcode.CoffeeShopDigital.model.coffeetea.Drink;

import java.util.ArrayList;

public class Order {
    private String notes = "";
    private double subtotal = 0.00;
    private double taxRate = 0.07;
    private double total = this.subtotal * (1 + this.taxRate);
    private ArrayList<Drink> drinksList = new ArrayList<>();
    private String customerName;


    public Order() {}


    //TODO: toString() override here


    public String getNotes() {
        return notes;
    }
    public void setNotes(String notes) {
        this.notes = notes;
    }

    public double getSubtotal() {
        return subtotal;
    }
    public void setSubtotal(double subtotal) {
        this.subtotal = subtotal;
    }

    public double getTaxRate() {
        return taxRate;
    }
    public void setTaxRate(double taxRate) {
        this.taxRate = taxRate;
    }

    public double getTotal() {
        return total;
    }
    public void setTotal(double total) {
        this.total = total;
    }

    public ArrayList<Drink> getDrinksList() {
        return drinksList;
    }
    public void setDrinksList(ArrayList<Drink> drinksList) {
        this.drinksList = drinksList;
    }

    public String getCustomerName() {
        return customerName;
    }
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
}
