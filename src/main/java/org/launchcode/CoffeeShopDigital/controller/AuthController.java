package org.launchcode.CoffeeShopDigital.controller;

import org.launchcode.CoffeeShopDigital.dto.request.LoginReq;
import org.launchcode.CoffeeShopDigital.dto.request.RegisterAdminReq;
import org.launchcode.CoffeeShopDigital.dto.request.RegisterUserReq;
import org.launchcode.CoffeeShopDigital.dto.response.JwtResp;
import org.launchcode.CoffeeShopDigital.dto.response.MessageResp;
import org.launchcode.CoffeeShopDigital.model.User;
import org.launchcode.CoffeeShopDigital.repository.RoleRepository;
import org.launchcode.CoffeeShopDigital.repository.UserRepository;
import org.launchcode.CoffeeShopDigital.security.jwt.JwtUtils;
import org.launchcode.CoffeeShopDigital.security.service.UserDetailsImpl;
import org.launchcode.CoffeeShopDigital.security.service.UserDetailsServiceImpl;
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
import java.util.ArrayList;
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


    @CrossOrigin(allowCredentials = "true", maxAge = -1)
    @GetMapping("/user-details")
    @ResponseBody
    public ResponseEntity<?> getUserDetails() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (!authentication.isAuthenticated()) {
            ArrayList<Object> respBody = new ArrayList<>();
            respBody.add(new UserDetailsImpl(guestId, null, "guest${guestId}", null, null, null, null));
            respBody.add(new MessageResp("No user is signed in; proceeding as Guest"));
            guestId++;

            return ResponseEntity.ok(respBody);
        } else {
            UserDetailsServiceImpl userDetailsService = new UserDetailsServiceImpl();
            UserDetailsImpl userDetails = (UserDetailsImpl) userDetailsService.loadUserByUsername(authentication.getPrincipal().toString());
            return ResponseEntity.ok(userDetails);
        }

    }

    @CrossOrigin(allowCredentials = "true", maxAge = 3600)
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

//    @CrossOrigin(allowCredentials = "true", maxAge = 3600)
    @PostMapping("/logout")
    public ResponseEntity<MessageResp> logoutUser() {
        System.out.println("logging the user out");
        SecurityContextHolder.getContext().setAuthentication(null);
        return ResponseEntity.ok().body(new MessageResp("You've been signed out!"));
    }

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

    @PostMapping("/register/admin")
    public ResponseEntity<?> registerAdmin(@Valid @RequestBody RegisterAdminReq registerAdminReq) {
        if (userRepository.existsByEmail(registerAdminReq.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResp("Error: User already exists, upgrade ${registerAdminReq.getName()} to Admin instead!"));
        }
        // Create new admin User account
        newAdmin = new User(registerAdminReq.getName(),
                registerAdminReq.getBirthday(),
                registerAdminReq.getEmail(),
                encoder.encode(registerAdminReq.getPassword()),
                registerAdminReq.getRole());

        userRepository.save(newAdmin);

        return ResponseEntity.ok(new MessageResp("Admin registered successfully!"));
    }

    //TODO: Fix duplicate role creation (see Bezkoder originial @ https://www.bezkoder.com/spring-boot-login-example-mysql/
    //TODO: Add upgradeUser method to add ADMIN role to an existing User as an Admin
}