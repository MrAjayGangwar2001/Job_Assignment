package com.Assesment.CRUD.Repository;

import com.Assesment.CRUD.Model.TodoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepo extends JpaRepository<TodoModel, Long> {

}
