package org.launchcode.CoffeeShopDigital.model.coffeetea.drink_option;

import org.launchcode.CoffeeShopDigital.model.coffeetea.Drink;

public interface Decaf {


    default void makeDecaf(Drink drink) {
        drink.setDecaf(true);
        drink.getOptions().add("Decaf\n");
    }
}
