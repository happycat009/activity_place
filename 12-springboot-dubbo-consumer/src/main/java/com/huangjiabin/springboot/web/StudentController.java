package com.huangjiabin.springboot.web;

import com.alibaba.dubbo.config.annotation.Reference;
import com.huangjiabin.springboot.service.StudentService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class StudentController {
    @Reference(interfaceClass = StudentService.class,version = "1.0.0",check=false)
    private StudentService studentService;
    @RequestMapping(value = "/student/count")
    public @ResponseBody Object studentCount(){
        Integer count=studentService.queryAllStudnetCount();
        return "学生人数为："+count;
    }
}
