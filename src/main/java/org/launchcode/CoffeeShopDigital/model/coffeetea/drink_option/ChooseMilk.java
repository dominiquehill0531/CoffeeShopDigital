package org.launchcode.CoffeeShopDigital.model.coffeetea.drink_option;

import org.launchcode.CoffeeShopDigital.model.coffeetea.Drink;
import org.launchcode.CoffeeShopDigital.model.coffeetea.Milk;

import java.util.ArrayList;

public interface ChooseMilk {

    default void chooseMilkType(Drink drink) {
        ArrayList<Object> options = drink.getOptions();
        Milk milk = drink.getMilkChoice();
        String milkString = String.format("Milk: %1s\t\t+\t$ %2f\n", milk.getChoice(), milk.getAddPrice());
        options.add(milkString);
        options.add(milk.getAddPrice());
    }
}
