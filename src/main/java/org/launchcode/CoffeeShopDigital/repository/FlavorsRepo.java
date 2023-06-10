package org.launchcode.CoffeeShopDigital.repository;

import org.launchcode.CoffeeShopDigital.model.Flavors;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlavorsRepo extends JpaRepository<Flavors, Integer> {
}
