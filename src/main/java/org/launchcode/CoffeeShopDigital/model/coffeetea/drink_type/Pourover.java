package org.launchcode.CoffeeShopDigital.model.coffeetea.drink_type;

import org.launchcode.CoffeeShopDigital.model.coffeetea.Drink;
import org.launchcode.CoffeeShopDigital.model.coffeetea.bean.BeanOrigin;
import org.launchcode.CoffeeShopDigital.model.coffeetea.bean.EOrigin;

public class Pourover extends Drink {


    private BeanOrigin originChoice;


    public Pourover() {}
    public Pourover(EOrigin origin) {
        this.originChoice = new BeanOrigin(origin);
        this.setPrice(originChoice.getPouroverPrice());
    }


    public BeanOrigin getOriginChoice() {
        return originChoice;
    }
    public void setOriginChoice(BeanOrigin originChoice) {
        this.originChoice = originChoice;
    }
}
