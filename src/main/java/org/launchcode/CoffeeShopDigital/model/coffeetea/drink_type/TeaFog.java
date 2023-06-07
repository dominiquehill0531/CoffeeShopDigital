package org.launchcode.CoffeeShopDigital.model.coffeetea.drink_type;

import org.launchcode.CoffeeShopDigital.model.coffeetea.Drink;
import org.launchcode.CoffeeShopDigital.model.coffeetea.drink_option.ChooseMilk;
import org.launchcode.CoffeeShopDigital.model.coffeetea.tealeaf.ETea;
import org.launchcode.CoffeeShopDigital.model.coffeetea.tealeaf.TeaType;

public class TeaFog extends Drink implements ChooseMilk {

    private TeaType teaType;

    public TeaFog() {}
    public TeaFog(ETea teaChoice) {
        this.teaType = new TeaType(teaChoice);
        this.setPrice(this.teaType.getTeaFogPrice());
    }


    public TeaType getTeaType() {
        return teaType;
    }

    public void setTeaType(TeaType teaType) {
        this.teaType = teaType;
    }
}
