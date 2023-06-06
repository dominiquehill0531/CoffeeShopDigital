package org.launchcode.CoffeeShopDigital.model.coffeetea;

public class Milk {

    private EMilk choice;
    private double addPrice;


    public Milk() {}
    public Milk(EMilk choice, double addPrice) {
        this.choice = choice;
        switch (this.choice) {
            case OAT:
            case ALMOND:
            case SOY:
                this.addPrice = 0.75;
                break;
            default: this.addPrice = 0;
        }
    }


    public EMilk getChoice() {
        return choice;
    }
    public void setChoice(EMilk choice) {
        this.choice = choice;
    }

    public double getAddPrice() {
        return addPrice;
    }
    public void setAddPrice(double addPrice) {
        this.addPrice = addPrice;
    }
}
