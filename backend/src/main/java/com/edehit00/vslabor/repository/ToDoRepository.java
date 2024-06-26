package com.edehit00.vslabor.repository;

import com.edehit00.vslabor.model.ToDo;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Qualifier("todos")
@Repository
public interface ToDoRepository extends JpaRepository<ToDo,Integer> {
}
