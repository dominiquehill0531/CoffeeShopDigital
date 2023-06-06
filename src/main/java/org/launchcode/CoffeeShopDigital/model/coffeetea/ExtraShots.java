package org.launchcode.CoffeeShopDigital.model.coffeetea;

public class ExtraShots {

    private int quantity = 0;
    private static double price = 0.50;
    private double addPrice;


    public ExtraShots() {}
    public ExtraShots(int quantity) {
        this.quantity = quantity;
        this.addPrice = price * this.quantity;
    }

    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public static double getPrice() {
        return price;
    }
    public static void setPrice(double price) {
        ExtraShots.price = price;
    }

    public double getAddPrice() {
        return addPrice;
    }
    public void setAddPrice(double addPrice) {
        this.addPrice = addPrice;
    }
}
