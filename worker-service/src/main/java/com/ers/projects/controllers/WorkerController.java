package com.ers.projects.controllers;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ers.projects.models.Worker;
import com.ers.projects.services.WorkerService;


@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080", 
		"http://expense-reimbursement-system.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/api/workers")
public class WorkerController {
	
	@Autowired
	private WorkerService ws;
	private Logger log = Logger.getLogger(WorkerController.class);
	
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Worker> getAllWorkers() {
		List<Worker> workers = ws.getAllWorkers();
		if(workers == null) {
			log.error("List of all workers was called but failed to load list-- Empty list.");
		}
		else {
			log.info("List of all workers was called for and sent successfully.");
		}
		return workers;
	}
	
	@GetMapping("/{id}")
	public Worker getWorkerById(@PathVariable int id) {
		log.info("Get request for worker with ID: "+id + " was called");
		Worker worker = ws.getWorkerById(id);
		
		if(worker == null) {
			log.info("Worker not found-- From controller");
		}
		else {
			log.info("Worker = " + worker + " was sent");
		}
		return worker;
	}
	
	@GetMapping("/name/{id}")
	public @ResponseBody String getNameById(@PathVariable int id) {
		Worker w = ws.getWorkerById(id);
		String name = w.getFirstName() + " "+w.getLastName();
		log.info("Name: "+ name + " sent");
		return name;
	}
	// Return worker information after update
	@PutMapping
	public Worker updateWorker(@RequestBody Worker w) {
		log.info("A request to update a worker personal information was received");
		Worker worker = ws.updateWorkerInfo(w);
		log.info(worker + " updated and sent to caller");
		return worker;
	}
	
	@PostMapping
	public Worker createWorker(@RequestBody Worker w) {
		log.info("A request to create a worker was received");
		Worker worker = ws.createWorker(w);
		log.info(worker + " created and sent to caller");
		return worker;
	}
}
