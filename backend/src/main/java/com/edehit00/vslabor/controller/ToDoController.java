package com.edehit00.vslabor.controller;


import com.edehit00.vslabor.model.ToDo;
import com.edehit00.vslabor.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoController {

    @Autowired
    private ToDoService toDoService;

    @PostMapping("/add")
    public String add(@RequestBody ToDo todo){
        toDoService.saveToDo(todo);
        return "New ToDo added";
    }

    @GetMapping("/getAll")
    public List<ToDo> getAllToDo(){
        return toDoService.getAllToDo();
    }

    @GetMapping("/getById/{id}")
    public ToDo getToDoById(@PathVariable int id){
        return toDoService.getToDoById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        toDoService.deleteToDo(id);
        return "ToDo removed";
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@RequestBody ToDo todo, @PathVariable int id){
        return (toDoService.updateToDo(id, todo));
    }

}
