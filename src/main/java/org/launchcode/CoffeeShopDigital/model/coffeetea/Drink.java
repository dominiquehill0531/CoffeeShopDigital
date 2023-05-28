package org.launchcode.CoffeeShopDigital.model.coffeetea;

import org.launchcode.CoffeeShopDigital.model.Purchasable;

import java.util.ArrayList;
import java.util.HashMap;

public abstract class Drink extends Purchasable {

    private DrinkSize size;
    private boolean isDrinkIced = false;
    private boolean isDecaf = false;
    private Milk milkChoice;
    private HashMap<Boolean, Milk> hasSplashMilk = new HashMap<>();
    private ArrayList<Object> options = new ArrayList<>();


    //TODO: Need toString implementation (for Order printing)


    public DrinkSize getSize() {
        return size;
    }
    public void setSize(DrinkSize size) {
        this.size = size;
    }

    public boolean isDrinkIced() {
        return isDrinkIced;
    }
    public void setDrinkIced(boolean drinkIced) {
        isDrinkIced = drinkIced;
    }

    public HashMap<Boolean, Milk> getHasSplashMilk() {
        return hasSplashMilk;
    }
    public void setHasSplashMilk(HashMap<Boolean, Milk> hasSplashMilk) {
        this.hasSplashMilk = hasSplashMilk;
    }

    public ArrayList<Object> getOptions() {
        return options;
    }
    public void setOptions(ArrayList<Object> options) {
        this.options = options;
    }

    public boolean isDecaf() {
        return isDecaf;
    }
    public void setDecaf(boolean decaf) {
        isDecaf = decaf;
    }

    public Milk getMilkChoice() {
        return milkChoice;
    }
    public void setMilkChoice(Milk milkChoice) {
        this.milkChoice = milkChoice;
    }
}
