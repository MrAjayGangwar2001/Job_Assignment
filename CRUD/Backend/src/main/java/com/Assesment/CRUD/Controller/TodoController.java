package com.Assesment.CRUD.Controller;

import com.Assesment.CRUD.Dto.TodoDto;
import com.Assesment.CRUD.Response.TodoResponse;
import com.Assesment.CRUD.Service.TodoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/todo")
public class TodoController {

    private final TodoService todoService;

    @PostMapping("/create")
    public TodoResponse createTodo(@Valid @RequestBody TodoDto todoDto){
        return todoService.createTodo(todoDto);
    }

    @GetMapping("/allTodo")
    public List<TodoDto> getAllTodo(){
        return  todoService.getAllTodo();
    }

    @PatchMapping("/{id}")
    public TodoResponse updateTodo(@PathVariable Long id, @RequestBody TodoDto todoDto){
        return todoService.updateTodo(id, todoDto);
    }

    @DeleteMapping("/{id}")
    public TodoResponse deleteTodo(@PathVariable Long id){
        return todoService.deleteTodo(id);
    }
}
