package org.launchcode.CoffeeShopDigital.model.coffeetea;

import org.launchcode.CoffeeShopDigital.model.Purchasable;
import org.launchcode.CoffeeShopDigital.model.coffeetea.drink_option.AddSweet;

import javax.persistence.Entity;
import javax.persistence.MappedSuperclass;
import java.util.ArrayList;
import java.util.HashMap;

@MappedSuperclass
public abstract class Drink extends Purchasable implements AddSweet {

    private DrinkSize size;
    private boolean isDrinkIced = false;
    private boolean isDecaf = false;
    private Milk milkChoice;
    private ArrayList<ESweet> sweeteners = new ArrayList<>();
    private HashMap<Boolean, Milk> hasSplashMilk = new HashMap<>();
    private ArrayList<Object> options = new ArrayList<>();


    //TODO: Need toString implementation (for Order printing)
    //TODO: saveDrink() to user's savedDrinks ArrayList
    //TODO: All drink type classes need to initialize base price unless initialized via enum
    //TODO: Need DrinkController


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

    public ArrayList<ESweet> getSweeteners() {
        return sweeteners;
    }
    public void setSweeteners(ArrayList<ESweet> sweeteners) {
        this.sweeteners = sweeteners;
    }
}
