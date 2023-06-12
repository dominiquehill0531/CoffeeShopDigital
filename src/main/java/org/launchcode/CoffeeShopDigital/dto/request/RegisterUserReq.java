package org.launchcode.CoffeeShopDigital.dto.request;

import org.launchcode.CoffeeShopDigital.model.ERole;
import org.launchcode.CoffeeShopDigital.model.Role;
import org.launchcode.CoffeeShopDigital.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class RegisterUserReq {
    @NotBlank
    private String name;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String birthday;
    @NotBlank
    private String password;
    @NotNull
    private String[] role;
    @Autowired
    RoleRepository roleRepository;

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getBirthday() {
        return birthday;
    }

    public String getPassword() {
        return password;
    }

    public Set<Role> getRole() {
        ArrayList<Role> roleArray = new ArrayList<>();
        for (String role : this.role) {
            if (role == "ADMiN") {
                Role adminRole = roleRepository.findByName(ERole.ADMIN)
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roleArray.add(adminRole);
            }
            if (role == "USER") {
                Role userRole = roleRepository.findByName(ERole.USER)
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roleArray.add(userRole);
            }
        }
        return new HashSet<>(roleArray);
    }
}
