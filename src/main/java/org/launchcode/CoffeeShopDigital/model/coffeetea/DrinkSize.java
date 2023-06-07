package org.launchcode.CoffeeShopDigital.model.coffeetea;

public class DrinkSize {

    private ESize choice;
    private double addPrice;


    public DrinkSize() {}
    public DrinkSize(ESize choice, double addPrice) {
        this.choice = choice;
        switch (this.choice) {
            case REGULAR: this.addPrice = 0;
                break;
            case MEDIUM: this.addPrice = 0.75;
                break;
            case LARGE: this.addPrice = 1.50;
                break;
        }
    }


    public ESize getChoice() {
        return choice;
    }
    public void setChoice(ESize choice) {
        this.choice = choice;
    }

    public double getAddPrice() {
        return addPrice;
    }
    public void setAddPrice(double addPrice) {
        this.addPrice = addPrice;
    }
}
