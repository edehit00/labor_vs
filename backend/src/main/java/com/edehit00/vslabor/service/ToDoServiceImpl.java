package com.edehit00.vslabor.service;

import com.edehit00.vslabor.exception.ToDoNotFoundException;
import com.edehit00.vslabor.model.ToDo;
import com.edehit00.vslabor.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoServiceImpl implements ToDoService {

    @Autowired
    private ToDoRepository toDoRepository;
    @Override
    public ToDo saveToDo(ToDo todo) {
        return toDoRepository.save(todo);
    }
    @Override
    public List<ToDo> getAllToDo() {
        return toDoRepository.findAll();
    }
    @Override
    public ToDo getToDoById(int id) {
        return toDoRepository.findById(id).orElseThrow(() -> new ToDoNotFoundException(id));
    }
    @Override
    public void deleteToDo(int id) {
        toDoRepository.deleteById(id);
    }

    @Override
    public ResponseEntity<String> updateToDo(int id, ToDo newToDo) {
        return toDoRepository.findById(id).map(todo ->{
            todo.setTodo(newToDo.getTodo());
            todo.setDescription(newToDo.getDescription());
            toDoRepository.save(todo);
            return new ResponseEntity<>("ToDo updated", HttpStatus.OK);
        }).orElse(new ResponseEntity<>("No ToDo with this id", HttpStatus.BAD_REQUEST));
    }


}
