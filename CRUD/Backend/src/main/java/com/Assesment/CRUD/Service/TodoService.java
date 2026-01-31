package com.Assesment.CRUD.Service;

import com.Assesment.CRUD.Dto.TodoDto;
import com.Assesment.CRUD.Model.TodoModel;
import com.Assesment.CRUD.Repository.TodoRepo;
import com.Assesment.CRUD.Response.TodoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepo todoRepo;

    // To Create Todos
    public TodoResponse createTodo(TodoDto  todoDto) {
        TodoModel todoModel = new TodoModel();
        todoModel.setTitle(todoDto.getTitle());
        todoModel.setDescription(todoDto.getDescription());

        todoRepo.save(todoModel);

        return new TodoResponse(todoModel.getId(), todoModel.getTitle(), todoModel.getDescription());
    }

    // Get All Todos

    public List<TodoDto> getAllTodo() {
        List<TodoModel> todoModels = todoRepo.findAll();
        List<TodoDto> todoDtos = todoModels.stream().map(tm -> new TodoDto(tm.getId(), tm.getTitle(), tm.getDescription())).toList();
        return  todoDtos;

    }

    // To Update Todos
    public TodoResponse updateTodo(Long id, TodoDto  todoDto) {
        Optional<TodoModel> todoModel = todoRepo.findById(id);
        if (todoModel.isPresent()) {
            TodoModel todomodel = todoModel.get();
            if (todoDto.getTitle() != null) {
                todomodel.setTitle(todoDto.getTitle());
            }

            if (todoDto.getDescription() != null) {
                todomodel.setDescription(todoDto.getDescription());
            }

            todoRepo.save(todomodel);

            return new TodoResponse(todomodel.getId(), todomodel.getTitle(), todomodel.getDescription());
        }else {
            throw new RuntimeException("User Id Not Found, Try Correct User Id!");
        }
    }

    // To Delete List Items
    public TodoResponse deleteTodo(Long id) {
        Optional<TodoModel> todoModel = todoRepo.findById(id);
        if (todoModel.isPresent()) {
            TodoModel todomodel = todoModel.get();
            todoRepo.delete(todomodel);
            return new TodoResponse(todomodel.getId(), todomodel.getTitle(), todomodel.getDescription());
        }else {
            throw new RuntimeException("User Id Not Found, Try Correct User Id to Delete List Item!");
        }
    }


}
