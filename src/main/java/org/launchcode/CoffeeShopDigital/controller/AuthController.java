package org.launchcode.CoffeeShopDigital.controller;

import org.launchcode.CoffeeShopDigital.dto.request.LoginReq;
import org.launchcode.CoffeeShopDigital.dto.request.RegisterUserReq;
import org.launchcode.CoffeeShopDigital.dto.response.JwtResp;
import org.launchcode.CoffeeShopDigital.dto.response.MessageResp;
import org.launchcode.CoffeeShopDigital.model.User;
import org.launchcode.CoffeeShopDigital.repository.RoleRepository;
import org.launchcode.CoffeeShopDigital.repository.UserRepository;
import org.launchcode.CoffeeShopDigital.security.jwt.JwtUtils;
import org.launchcode.CoffeeShopDigital.security.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    JwtUtils jwtUtils;

    private static long guestId = 0;

    User newUser;
    User newAdmin;


    @CrossOrigin(allowCredentials = "true")
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginReq loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResp(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @CrossOrigin(allowCredentials = "true")
    @PostMapping("/register/user")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterUserReq registerUserReq) {
        if (userRepository.existsByEmail(registerUserReq.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResp("Error: Email is already signed up!"));
        }
        //Create new User Account
        newUser = new User(registerUserReq.getName(),
                registerUserReq.getBirthday(),
                registerUserReq.getEmail(),
                encoder.encode(registerUserReq.getPassword()),
                registerUserReq.getRole());
        userRepository.save(newUser);

        return ResponseEntity.ok(new MessageResp("User registered successfully!"));
    }

    //TODO: Fix duplicate role creation (see Bezkoder originial @ https://www.bezkoder.com/spring-boot-login-example-mysql/
    //TODO: Add upgradeUser method to add ADMIN role to an existing User as an Admin
}