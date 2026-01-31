package com.Assesment.CRUD.Response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
public class UserResponseDto {

    private Long userId;
    private String userName;
    private String email;


}
