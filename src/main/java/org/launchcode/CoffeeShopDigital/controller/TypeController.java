package org.launchcode.CoffeeShopDigital.controller;

import org.launchcode.CoffeeShopDigital.model.DrinkTypes;
import org.launchcode.CoffeeShopDigital.model.MilkType;
import org.launchcode.CoffeeShopDigital.model.Toppings;
import org.launchcode.CoffeeShopDigital.model.coffeetea.Flavors;
import org.launchcode.CoffeeShopDigital.repository.DrinkTypesRepo;
import org.launchcode.CoffeeShopDigital.repository.FlavorsRepo;
import org.launchcode.CoffeeShopDigital.repository.MilkTypeRepo;
import org.launchcode.CoffeeShopDigital.repository.ToppingsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/drink")
    @CrossOrigin(allowCredentials = "true", maxAge = 3600)
    public Optional<DrinkTypes> getDrinkById(@RequestParam int drinkId){
        return this.drinkTypesRepo.findById(drinkId);
    }

    @GetMapping("/flavors")
    @CrossOrigin(allowCredentials = "true", maxAge = 3600)
    public List<Flavors> getFlavors(){
        return this.flavorsRepo.findAll();
    }

    @GetMapping("/toppings")
    @CrossOrigin(allowCredentials = "true", maxAge = 3600)
    public List<Toppings> getToppings(){
        return this.toppingsRepo.findAll();
    }
}
