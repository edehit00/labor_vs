package com.edehit00.vslabor.exception;

public class ToDoNotFoundException extends RuntimeException{
    public ToDoNotFoundException(int id) {
        super("Could not find todo " + id);
    }
}
