package org.launchcode.CoffeeShopDigital.repository;

import org.launchcode.CoffeeShopDigital.model.Toppings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToppingsRepo extends JpaRepository<Toppings, Integer> {
}
