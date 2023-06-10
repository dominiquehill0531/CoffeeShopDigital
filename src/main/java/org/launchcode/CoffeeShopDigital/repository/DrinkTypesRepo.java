package org.launchcode.CoffeeShopDigital.repository;

import org.launchcode.CoffeeShopDigital.model.DrinkTypes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrinkTypesRepo extends JpaRepository<DrinkTypes, Integer> {
}
