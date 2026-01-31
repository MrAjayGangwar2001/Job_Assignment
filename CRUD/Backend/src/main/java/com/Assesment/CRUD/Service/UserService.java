package com.Assesment.CRUD.Service;

import com.Assesment.CRUD.Dto.LoginDto;
import com.Assesment.CRUD.Dto.SignupDto;
import com.Assesment.CRUD.Model.UserModel;
import com.Assesment.CRUD.Repository.UserRepo;
import com.Assesment.CRUD.Response.UserResponseDto;
import jakarta.validation.ValidationException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepo userRepo;

    public UserResponseDto register(SignupDto user) {


        if (userRepo.findByEmail(user.getEmail()).isPresent()) {
            throw new ValidationException("Email already exists");
        }
        UserModel newUser = new UserModel();
        newUser.setUserName(user.getUserName());
        newUser.setEmail(user.getEmail());
        newUser.setPassword((user.getPassword()));
        userRepo.save(newUser);
        UserResponseDto userResponseDto = new UserResponseDto(newUser.getUserId(), newUser.getUserName(), newUser.getEmail());
        return userResponseDto;
    }

    public UserResponseDto login(LoginDto userDto) {

        Optional<UserModel> userModel = userRepo.findByEmail(userDto.getEmail());
//        UserModel userModel = userRepo.findByEmail(userDto.getEmail());
        if (userModel.isEmpty()){
            throw new ValidationException("User Not Registered with us!");
        }
        UserModel user = userModel.get();

        if (user.getPassword().equals(userDto.getPassword())) {
            return new UserResponseDto(user.getUserId(), user.getUserName(), user.getEmail());
        }else{
            throw new ValidationException("Wrong Password");
        }
    }
}
