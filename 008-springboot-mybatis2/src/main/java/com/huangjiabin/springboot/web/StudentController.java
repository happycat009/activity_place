package com.huangjiabin.springboot.web;

import com.huangjiabin.springboot.model.Student;
import com.huangjiabin.springboot.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class StudentController {

    @Autowired
    private StudentService studentService;

    @RequestMapping(value = "/student")
    public @ResponseBody Object student(Integer id){
        Student student = studentService.queryStudentById(id);
        return student;
    }
    @RequestMapping(value="/update")
    public @ResponseBody Object update(Integer id,String name){
        Student student = new Student();
        student.setId(id);
        student.setName(name);
        int student1 = studentService.updateStudentById(student);
        return student1+student.getName();
    }
}
