//Create initial admin User on startup

package org.launchcode.CoffeeShopDigital.security;

import org.launchcode.CoffeeShopDigital.model.ERole;
import org.launchcode.CoffeeShopDigital.model.Role;
import org.launchcode.CoffeeShopDigital.model.User;
import org.launchcode.CoffeeShopDigital.repository.RoleRepository;
import org.launchcode.CoffeeShopDigital.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
public class CommandLineAppStartupRunner implements CommandLineRunner {

    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;

    @Override
    public void run(String...args) throws Exception {

        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(new Role(ERole.USER));
        adminRoles.add(new Role(ERole.ADMIN));
        roleRepository.saveAll(adminRoles);

        if (userRepository.count() < 1) {
            User admin = new User("admin", "01/01", "admin@email.com", "password",
                    adminRoles);
            userRepository.save(admin);
        }
    }
}
