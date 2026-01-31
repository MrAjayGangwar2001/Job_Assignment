package com.Assesment.CRUD.Controller;

import com.Assesment.CRUD.Dto.LoginDto;
import com.Assesment.CRUD.Dto.SignupDto;
import com.Assesment.CRUD.Response.UserResponseDto;
import com.Assesment.CRUD.Service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/todo")
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/home")
    public String home() {
        return "You are on Home Page, No Login Needed:";
    }

    @PostMapping("/signup")
    public UserResponseDto signup(@Valid @RequestBody SignupDto userDto) {

        return userService.register(userDto);
    }

    @PostMapping("/login")
    public UserResponseDto login(@Valid @RequestBody LoginDto userDto) {

        return userService.login(userDto);
    }
}
