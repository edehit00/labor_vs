package com.edehit00.vslabor.service;

import com.edehit00.vslabor.model.ToDo;
import org.springframework.http.ResponseEntity;
import java.util.List;

public interface ToDoService {
    ToDo saveToDo(ToDo todo);
    List<ToDo> getAllToDo();
    void deleteToDo(int id);
    ResponseEntity<String> updateToDo(int id, ToDo todo);
    ToDo getToDoById(int id);
}
