package com.ers.projects.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ers.projects.models.Worker;

@Repository
public interface WorkerRepo extends JpaRepository<Worker, Integer> {

	Worker findByWorkerId(int id);
	

}
