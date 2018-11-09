package com.cts.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.demo.entities.Course;

@RestController
@CrossOrigin("*")
public class HelloController {
	
	@Autowired
	CourseRepo courseRepo;
	
	@RequestMapping(path="/hello", method=RequestMethod.GET)
	public Greeting sayHello(){
		return new Greeting("Konichiwa!!");
	}
	
	@RequestMapping(path="/courses", method=RequestMethod.GET)
	public List<Course> getAllCourses(){
		return courseRepo.findAll();
	}
	
	@RequestMapping(path="/courses", method=RequestMethod.POST)
	public ResponseEntity<Void> addCourse(@RequestBody Course course){
		courseRepo.save(course);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

}
