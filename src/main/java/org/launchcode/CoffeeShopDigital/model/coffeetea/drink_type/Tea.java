package org.launchcode.CoffeeShopDigital.model.coffeetea.drink_type;

import org.launchcode.CoffeeShopDigital.model.coffeetea.Drink;
import org.launchcode.CoffeeShopDigital.model.coffeetea.drink_option.AddShots;
import org.launchcode.CoffeeShopDigital.model.coffeetea.tealeaf.ETea;
import org.launchcode.CoffeeShopDigital.model.coffeetea.tealeaf.TeaType;

public class Tea extends Drink implements AddShots {

    private TeaType teaType;


    public Tea() {}
    public Tea(ETea teaChoice) {
        this.teaType = new TeaType(teaChoice);
        this.setPrice(this.teaType.getTeaPrice());
    }


    public TeaType getTeaType() {
        return teaType;
    }
    public void setTeaType(TeaType teaType) {
        this.teaType = teaType;
    }
}
