package com.ers.projects.controllers;

import org.apache.log4j.Logger;
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
	private Logger log = Logger.getLogger(LogInController.class);
	
	@PostMapping("/authenticate")
	public Worker authorize(@RequestBody Worker w) {
		System.out.println(w);
		Worker worker = ws.getWorkerByUsername(w.getUsername());
		if(worker != null) {
			if(worker.getUsername().equals(w.getUsername()) && worker.getPassCode().equals(w.getPassCode())) {
				log.info("Success: credentials for " + w.getUsername() + " matched.");
				return worker;
			}
			else {
				log.info("Fail: credentials for " + w.getUsername() + " did not match. Incorrect password");
			}
		}
		return null;
	}
}
