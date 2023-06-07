package org.launchcode.CoffeeShopDigital.model.coffeetea.drink_option;

import org.launchcode.CoffeeShopDigital.model.coffeetea.Drink;
import org.launchcode.CoffeeShopDigital.model.coffeetea.ESweet;
import org.launchcode.CoffeeShopDigital.model.coffeetea.Sweetener;

import java.util.ArrayList;

public interface AddSweet {

    default void addSweeteners(Drink drink) {
        ArrayList<Object> options = drink.getOptions();
        ArrayList<ESweet> sweeteners = drink.getSweeteners();
        for (ESweet sweet : sweeteners) {
            Sweetener sweetener = new Sweetener(sweet);
            String sweetString = String.format("Sweet: %1s\t\t+\t$ %2f\n", sweetener.getName(), sweetener.getAddPrice());
            options.add(sweetString);
            options.add(sweetener.getAddPrice());
        }
    }
}
