package com.ers.projects.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ers.projects.models.Worker;
import com.ers.projects.services.WorkerService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080", 
		"http://expense-reimbursement-system.s3-website.us-east-2.amazonaws.com"})
public class LogInController {
	
	@Autowired
	private WorkerService ws;
	
	
	@PostMapping("/authenticate")
	public Worker authorize(@RequestBody Worker w) {
		Worker worker = ws.getWorkerByUsername(w.getUsername());
		if(worker.getUsername().equals(w.getUsername()) && worker.getPassCode().equals(w.getPassCode())) {
			return worker;
		}
		return null;
	}

}
