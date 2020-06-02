package com.chocolatier.Chocolate.Website.bonbon.crud;


import com.sun.tools.javac.comp.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@CrossOrigin(origins = "http://localhost:3000"
@RestController
public class BonBonResource {

    @Autowired
    private postBonBon;

    @GetMapping("/users/{username}/todos")
    public List<Chocolate> getAllChocolate(@PathVariable String username){
        return todoService.findAll();
    }


    //Creating UPDATE
    @GetMapping("/users/{username}/chocolate{id}")
    public BonBon bonbon(@PathVariable String username, @PathVariable long id){
        return todoService.findById(id);
    }



    //creating DELETE
    @DeleteMapping("/users/{username}/chocolate{id}")
    public ResponseEntity<Void> deleteBonBOn(@PathVariable String username, @PathVariable long id){

        //invoking todoservice delete method, if delete was successful, it will return todo back
        BonBon bonbon = BonService.deleteById(id);
        if(todo!=null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{username}/chocolate{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody BonBon bonbon ){
        Bonbon bonbon = BonService.save(bonbon);
        return new ResponseEntity<Todo>(bonbon, HttpStatus.OK);

    }

    @PostMapping("/users/{username}/chocolate{id}")
    public ResponseEntity<Void> updateTodo(@PathVariable String username, @RequestBody Todo todo ){
        Todo createdTodo = todoService.save(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdBonbon.getId()).toUri();

        return ResponseEntity.created(uri).build();

    }

}

