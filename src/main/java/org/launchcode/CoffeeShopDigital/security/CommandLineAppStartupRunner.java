//Create initial admin User on startup

package org.launchcode.CoffeeShopDigital.security;

import org.launchcode.CoffeeShopDigital.model.ERole;
import org.launchcode.CoffeeShopDigital.model.Role;
import org.launchcode.CoffeeShopDigital.model.User;
import org.launchcode.CoffeeShopDigital.repository.RoleRepository;
import org.launchcode.CoffeeShopDigital.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
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
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        String password = encoder.encode("password");


        if (userRepository.count() < 1 && roleRepository.count() < 1) {
            Set<Role> adminRoles = new HashSet<>();
            for (ERole value : ERole.values()) {
                adminRoles.add(new Role(value));
            }


            User admin = new User("admin", "01/02", "admin@email.com", password, adminRoles);
            userRepository.save(admin);
        }
    }
}
