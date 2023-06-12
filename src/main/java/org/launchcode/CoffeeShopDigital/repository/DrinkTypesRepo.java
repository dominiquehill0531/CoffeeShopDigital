package org.launchcode.CoffeeShopDigital.repository;

import org.launchcode.CoffeeShopDigital.model.DrinkTypes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DrinkTypesRepo extends JpaRepository<DrinkTypes, Integer> {
    public List<DrinkTypes> findAll();
}
