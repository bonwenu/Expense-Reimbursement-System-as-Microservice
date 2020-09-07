package com.ers.projects.services;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ers.projects.models.Worker;
import com.ers.projects.repositories.WorkerRepo;

@Service
public class WorkerService {
	
	@Autowired
	private WorkerRepo workerRepo;
	private Logger log = Logger.getLogger(WorkerService.class);
	
	public List<Worker> getAllWorkers() {
		List<Worker> workers = null;
		workers = workerRepo.findAll();
		if(workers == null) {
			log.error("No workers. This looks really bad");
			return null;
		}
		else {
			log.info("List of all workers was successfuly gathered");
		}
		// Sort by last name
		Collections.sort(workers, Comparator.comparing(Worker::getLastName));
		return workers;
	}
	
	public Worker getWorkerById(int id) {
		Worker w = null;
		w = workerRepo.findByWorkerId(id);
		
		if(w!=null) {
			log.info("Worker with ID: " + id + " requested and found.");
		}
		else {
			log.info("Worker with ID: " + id + " not found.");
		}
		return w;
	}

	public Worker createWorker(Worker w) {
		workerRepo.save(w);
		log.info("Worker with ID: " + w.getWorkerId() + " sucessfully inserted");
		return w;
	}

	public Worker updateWorkerInfo(Worker w) {
		workerRepo.save(w);
		log.info("Worker with ID: " + w.getWorkerId() + " sucessfully updated");
		return w;
	}
	
	public Worker getWorkerByUsername(String s) {
		Worker w = null;
		w = workerRepo.findByUsername(s);
		
		if(w!=null) {
			log.info("Worker with username: " + s + " requested and found.");
		}
		else {
			log.info("Worker with username: " + s + " not found.");
		}
		return w;
	}

}
