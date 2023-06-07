package org.launchcode.CoffeeShopDigital.model.coffeetea.tealeaf;

import java.util.EnumMap;

public class TeaType {

    private ETea teaChoice;
    private double teaPrice;
    private static EnumMap<ETea, Double> teaPriceMap =
            new EnumMap<>(ETea.class);
    private double teaFogPrice;
    private static EnumMap<ETea, Double> teaFogPriceMap =
            new EnumMap<>(ETea.class);


    public TeaType() {}
    public TeaType(ETea teaChoice) {
        this.teaChoice = teaChoice;

        //TODO: delete population of initial teaPriceMap after Admin permissions to update teas is implemented
        teaPriceMap.put(ETea.BLACK, 4.00);
        teaPriceMap.put(ETea.GREEN, 4.00);
        teaPriceMap.put(ETea.WHITE, 4.00);
        teaPriceMap.put(ETea.HERBAL, 3.50);
        teaPriceMap.put(ETea.CHAI, 4.50);
        this.teaPrice = teaPriceMap.get(this.teaChoice);

        //TODO: delete population of initial teaFogPriceMap after Admin permissions to update teas is implemented
        teaFogPriceMap.put(ETea.BLACK, teaPriceMap.get(ETea.BLACK) + 0.75);
        teaFogPriceMap.put(ETea.GREEN, teaPriceMap.get(ETea.GREEN) + 0.75);
        teaFogPriceMap.put(ETea.WHITE, teaPriceMap.get(ETea.WHITE) + 0.75);
        teaFogPriceMap.put(ETea.HERBAL, teaPriceMap.get(ETea.HERBAL) + 0.75);
        teaFogPriceMap.put(ETea.CHAI, teaPriceMap.get(ETea.CHAI) + 0.75);
        this.teaFogPrice = teaFogPriceMap.get(this.teaChoice);
    }


    //TODO: addTea(ETea newTea, Double teaPrice)
    //TODO: changeTeaPrice(ETea teaChoice, Double newPrice)
    //TODO: removeTea(ETea oldTea)


    public ETea getTeaChoice() {
        return teaChoice;
    }
    public void setTeaChoice(ETea teaChoice) {
        this.teaChoice = teaChoice;
    }

    public double getTeaPrice() {
        return teaPrice;
    }
    public void setTeaPrice(double teaPrice) {
        this.teaPrice = teaPrice;
    }

    public static EnumMap<ETea, Double> getTeaPriceMap() {
        return teaPriceMap;
    }

    public double getTeaFogPrice() {
        return teaFogPrice;
    }
    public void setTeaFogPrice(double teaFogPrice) {
        this.teaFogPrice = teaFogPrice;
    }

    public static EnumMap<ETea, Double> getTeaFogPriceMap() {
        return teaFogPriceMap;
    }
}
