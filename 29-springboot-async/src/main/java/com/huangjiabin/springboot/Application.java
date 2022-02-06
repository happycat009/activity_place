package com.huangjiabin.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
public class Application  {

	public static void main(String[] args) {
		ApplicationContext context=SpringApplication.run(Application.class, args);
	};

}
