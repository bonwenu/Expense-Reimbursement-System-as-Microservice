package com.ers.projects.services;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ers.projects.models.Request;
import com.ers.projects.repositories.RequestRepo;

@Service
public class RequestService {
	
	@Autowired
	RequestRepo requestRepo;
	
	private Logger log = Logger.getLogger(RequestService.class);
	
	
	public List<Request> getAllRequests() {
		List<Request> requests = requestRepo.findAll();
		
		if(requests == null) {
			log.error("No requests. Either no one wants to be paid back or DB is empty");
			return null;
		}
		else {
			log.info("List of all requests was successfuly gathered");
		}
		
		Collections.sort(requests, Comparator.comparing(Request::getReqId));
		return requests;
	}

	public List<Request> getRequestsByEmpId(int id) {
		List<Request> requests = requestRepo.findByEmpId(id);
		
		Collections.sort(requests, Comparator.comparing(Request::getReqId));
		return requests;
	}


	public Request createRequest(Request r) {
		requestRepo.save(r);
		log.info("Request with ID: " + r.getReqId() + "sucessfully inserted");
		return r;
	}
	

	public Request updateRequest(Request r) {
		requestRepo.save(r);
		log.info("Request with ID: " + r.getReqId() + "sucessfully updated");
		return r;
	}

	public void deleteRequest(int id) {
		requestRepo.deleteById(id);
	}

	public List<Request> getAllPending(String status) {
		List<Request> requests = requestRepo.findByStatus(status);
		
		Collections.sort(requests, Comparator.comparing(Request::getReqId));
		return requests;
	}

	public List<Request> getAllNonPending(String status) {
		List<Request> requests = requestRepo.findByStatusNot(status);
				
		Collections.sort(requests, Comparator.comparing(Request::getReqId));
		return requests;
	}


	public List<Request> getPendingById(int id, String status) {
		List<Request> requests = requestRepo.findByEmpIdAndStatus(id, status);
		
		Collections.sort(requests, Comparator.comparing(Request::getReqId));
		return requests;
	}


	public List<Request> getNonPendingById(int id, String status) {
		List<Request> requests = requestRepo.findByEmpIdAndStatusNot(id, status);
		
		Collections.sort(requests, Comparator.comparing(Request::getReqId));
		return requests;
	}

}
