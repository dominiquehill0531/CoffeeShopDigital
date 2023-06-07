package org.launchcode.CoffeeShopDigital.model.coffeetea;

public class Sweetener {

    private ESweet name;
    private double addPrice;


    public Sweetener() {}
    public Sweetener(ESweet name) {
        this.name = name;
        switch (this.name) {
            case LAVENDER:
                this.addPrice = 0.75;
                break;
            case VANILLA:
            case CHOCOLATE:
            case CARAMEL:
                this.addPrice = 0.50;
                break;
            default: this.addPrice = 0;
        }
    }


    public ESweet getName() {
        return name;
    }
    public void setName(ESweet name) {
        this.name = name;
    }

    public double getAddPrice() {
        return addPrice;
    }
    public void setAddPrice(double addPrice) {
        this.addPrice = addPrice;
    }
}
