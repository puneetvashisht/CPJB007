package com.cts.demo.controllers;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.demo.entities.Course;

public interface CourseRepo extends JpaRepository<Course, Integer>{

}
