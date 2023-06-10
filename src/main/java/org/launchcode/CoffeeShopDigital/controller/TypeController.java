package org.launchcode.CoffeeShopDigital.controller;

import org.launchcode.CoffeeShopDigital.model.DrinkTypes;
import org.launchcode.CoffeeShopDigital.model.Flavors;
import org.launchcode.CoffeeShopDigital.model.MilkType;
import org.launchcode.CoffeeShopDigital.model.Toppings;
import org.launchcode.CoffeeShopDigital.repository.DrinkTypesRepo;
import org.launchcode.CoffeeShopDigital.repository.FlavorsRepo;
import org.launchcode.CoffeeShopDigital.repository.MilkTypeRepo;
import org.launchcode.CoffeeShopDigital.repository.ToppingsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("api/type")
public class TypeController {

    @Autowired
    private MilkTypeRepo milkTypeRepo;

    @Autowired
    private DrinkTypesRepo drinkTypesRepo;

    @Autowired
    private FlavorsRepo flavorsRepo;

    @Autowired
    private ToppingsRepo toppingsRepo;

    @GetMapping("/milkType")
    @CrossOrigin(allowCredentials = "true", maxAge = 3600)
    public List<MilkType> getMilkType(){
        return this.milkTypeRepo.findAll();
    }

    @GetMapping("/drinkTypes")
    @CrossOrigin(allowCredentials = "true", maxAge = 3600)
    public List<DrinkTypes> getDrinkTypes(){
        return this.drinkTypesRepo.findAll();
    }

    @GetMapping("/flavors")
    public List<Flavors> getFlavors(){
        return this.flavorsRepo.findAll();
    }

    @GetMapping("/toppings")
    public List<Toppings> getToppings() {
        return this.toppingsRepo.findAll();
    }
}
