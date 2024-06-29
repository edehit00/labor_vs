package com.edehit00.vslabor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.edehit00"})
public class VsLaborApplication {

	public static void main(String[] args) {
		SpringApplication.run(VsLaborApplication.class, args);
	}

}
