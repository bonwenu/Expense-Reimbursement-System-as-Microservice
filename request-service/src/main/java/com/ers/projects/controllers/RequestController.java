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
import org.springframework.web.bind.annotation.RestController;

import com.ers.projects.models.Request;
import com.ers.projects.services.RequestService;



@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8082", 
		"http://expense-reimbursement-system.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/api/requests")
public class RequestController {
	
	@Autowired
	private RequestService rs;
	private Logger log = Logger.getLogger(RequestController.class);
	
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Request> getAllRequests() {
		log.info("List of all requests was called for and information was sent to caller");
		return rs.getAllRequests();
	}
	
	@GetMapping("/all-pending")
	public List<Request> getAllPending() {
		log.info("List of all pending requests was called for and information was sent to caller");
		return rs.getAllPending("PENDING");
	}
	
	@GetMapping("/all-non-pending")
	public List<Request> getAllNonPending() {
		log.info("List of all non-pending requests was called for and information was sent to caller");
		return rs.getAllNonPending("PENDING");
	}
	
	
	@GetMapping("/non-pending/{id}")
	public List<Request> getNonPendingByWorkerId(@PathVariable int id) {
		log.info("List of non-pending requests for worker with ID:" + id + " was called for and information was sent to caller");
		return rs.getNonPendingById(id, "PENDING");
	}
	
	@GetMapping("/pending/{id}")
	public List<Request> getPendingByWorkerId(@PathVariable int id) {
		log.info("List of pending requests for worker with ID:" + id + " was called for and information was sent to caller");
		return rs.getPendingById(id, "PENDING");
	}
	
	@PostMapping
	public Request createRequest(@RequestBody Request r) {
		
		log.info("A request to add a request was received");
		Request request = rs.createRequest(r);
		log.info(request + " created and sent to caller");
		return request;
	}
	
	// Return list after approving/denying request
	@PutMapping
	public List<Request> updateRequest(@RequestBody Request r) {
		log.info("A request to update a request was received");
		Request request = rs.updateRequest(r);
		log.info(request + " updated and sent to caller");
		log.info("New updated list of pending request was sent to caller successfuly");
		return rs.getAllPending("PENDING");
	}
	
}
