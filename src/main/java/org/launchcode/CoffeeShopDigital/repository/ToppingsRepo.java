package org.launchcode.CoffeeShopDigital.repository;

import org.launchcode.CoffeeShopDigital.model.Toppings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToppingsRepo extends JpaRepository<Toppings, Integer> {
}
