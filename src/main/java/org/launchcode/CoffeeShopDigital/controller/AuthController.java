package org.launchcode.CoffeeShopDigital.controller;

import org.launchcode.CoffeeShopDigital.dto.request.LoginReq;
import org.launchcode.CoffeeShopDigital.dto.request.RegisterAdminReq;
import org.launchcode.CoffeeShopDigital.dto.request.RegisterUserReq;
import org.launchcode.CoffeeShopDigital.dto.response.JwtResp;
import org.launchcode.CoffeeShopDigital.dto.response.MessageResp;
import org.launchcode.CoffeeShopDigital.model.ERole;
import org.launchcode.CoffeeShopDigital.model.Role;
import org.launchcode.CoffeeShopDigital.model.User;
import org.launchcode.CoffeeShopDigital.repository.RoleRepository;
import org.launchcode.CoffeeShopDigital.repository.UserRepository;
import org.launchcode.CoffeeShopDigital.security.jwt.JwtUtils;
import org.launchcode.CoffeeShopDigital.security.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "localhost:4200", maxAge = 4800)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

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

    @PostMapping("/registerUser")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterUserReq registerUserReq) {
        if (userRepository.existsByEmail(registerUserReq.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResp("Error: Email is already signed up!"));
        }
        //Create new User Account
        User user = new User(registerUserReq.getName(),
                registerUserReq.getBirthday(),
                registerUserReq.getEmail(),
                encoder.encode(registerUserReq.getPassword()));

        Set<String> strRoles = registerUserReq.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        }
        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResp("User registered successfully!"));
    }

    @PostMapping("/registerAdmin")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> registerAdmin(@Valid @RequestBody RegisterAdminReq registerAdminReq) {
        if (userRepository.existsByEmail(registerAdminReq.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResp("Error: User already exists, upgrade ${registerAdminReq.getName()} to Admin instead!"));
        }
        // Create new admin's account
        User user = new User(registerAdminReq.getName(),
                registerAdminReq.getBirthday(),
                registerAdminReq.getEmail(),
                encoder.encode(registerAdminReq.getPassword()));

        Set<String> strRoles = registerAdminReq.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                if (role == "admin") {
                    Role adminRole = roleRepository.findByName(ERole.ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(adminRole);
                }
                if (role == "user") {
                    Role userRole = roleRepository.findByName(ERole.USER)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResp("Admin registered successfully!"));
    }

    //TODO: Add upgradeUser method to add ADMIN role to an existing User as an Admin

}