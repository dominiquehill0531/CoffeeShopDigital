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

public class RegisterAdminReq {
    @NotBlank
    private String name;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String birthday;
    @NotBlank
    private String password;

    @NotBlank
    private String confirmPassword;
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

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public Set<Role> getRole() {
        ArrayList<Role> roleArray = new ArrayList<>();
        for (String role : this.role) {
            Role roleToAdd = new Role(ERole.valueOf(role));
            roleArray.add(roleToAdd);
        }
        return new HashSet<>(roleArray);
    }
}