package org.launchcode.CoffeeShopDigital.model.coffeetea.bean;

import java.util.EnumMap;

public class BeanOrigin {

    private EOrigin origin;
    private double pouroverPrice;
    private static EnumMap<EOrigin, Double> pouroverPriceMap =
            new EnumMap<>(EOrigin.class);


    public BeanOrigin() {}
    public BeanOrigin(EOrigin origin) {
        this.origin = origin;

        //TODO: delete population of initial POpriceMap after Admin permissions to update origins is implemented
        pouroverPriceMap.put(EOrigin.ETHIOPIA, 6.00);
        pouroverPriceMap.put(EOrigin.COLOMBIA, 4.50);
        pouroverPriceMap.put(EOrigin.RWANDA, 5.25);
        pouroverPriceMap.put(EOrigin.HONDURAS,5.50);

        this.pouroverPrice = pouroverPriceMap.get(this.origin);
    }


    //TODO: addOrigin(EOrigin newOrigin, Double pouroverPrice)
    //TODO: changePouroverPrice(EOrigin pouroverOrigin, Double newPrice)
    //TODO: removeOrigin(EOrigin oldOrigin)


    public EOrigin getOrigin() {
        return origin;
    }
    public void setOrigin(EOrigin origin) {
        this.origin = origin;
    }

    public double getPouroverPrice() {
        return pouroverPrice;
    }
    public void setPouroverPrice(double pouroverPrice) {
        this.pouroverPrice = pouroverPrice;
    }
}
