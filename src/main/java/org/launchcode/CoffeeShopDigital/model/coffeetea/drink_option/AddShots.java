package org.launchcode.CoffeeShopDigital.model.coffeetea.drink_option;

import org.launchcode.CoffeeShopDigital.model.coffeetea.Drink;
import org.launchcode.CoffeeShopDigital.model.coffeetea.ExtraShots;

import java.util.ArrayList;

public interface AddShots {

    default void addExtraShots(Drink drink, int quantity) {
        ArrayList<Object> options = drink.getOptions();
        ExtraShots xShots = new ExtraShots(quantity);
        String shotsString = String.format("Xshots: %1d\t\t+\t$ %2f", xShots.getQuantity(), xShots.getAddPrice());
        options.add(shotsString);
        options.add(xShots);
    }
}
