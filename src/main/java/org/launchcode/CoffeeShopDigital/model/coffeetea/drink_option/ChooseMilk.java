package org.launchcode.CoffeeShopDigital.model.coffeetea.drink_option;

import org.launchcode.CoffeeShopDigital.model.coffeetea.Drink;
import org.launchcode.CoffeeShopDigital.model.coffeetea.Milk;

public interface ChooseMilk {

    default void chooseMilkType(Drink drink) {
        Milk milk = drink.getMilkChoice();
        String milkString = String.format("Milk: %1s\t\t+\t$ %2f", milk.getChoice(), milk.getAddPrice());
        drink.getOptions().add(milkString);
    }
}
