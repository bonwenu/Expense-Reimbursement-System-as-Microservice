package com.ers.projects.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ers.projects.models.Request;


@Repository
public interface RequestRepo extends JpaRepository<Request, Integer> {
	
	List<Request> findByWorkerIdAndStatusNot(int id, String status);
	List<Request> findByWorkerIdAndStatus(int id, String status);
	List<Request> findByStatus(String status);
	List<Request> findByStatusNot(String status);
	List<Request> findByWorkerId(int id);
	

}
