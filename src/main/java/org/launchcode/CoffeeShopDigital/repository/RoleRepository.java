package org.launchcode.CoffeeShopDigital.repository;

import org.launchcode.CoffeeShopDigital.model.ERole;
import org.launchcode.CoffeeShopDigital.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
