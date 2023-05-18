package org.launchcode.CoffeeShopDigital.dto.request;

import javax.validation.constraints.NotBlank;

public class LoginReq {
    @NotBlank
    private String email;
    @NotBlank
    private String password;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
