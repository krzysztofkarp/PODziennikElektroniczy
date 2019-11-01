package com.sollan.grades.service;

import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.grades.model.Grade;
import com.sollan.grades.repo.GradeRepository;

@Service
public class GradeServiceImpl implements GradeService{
	
	
	@Autowired
	private GradeRepository repo;
	
	
	
	@PostConstruct
	private void init() {
		Set<Grade> g = byStudentId((long)14);
		System.out.println(g.size());
	}

	@Override
	public Set<Grade> byStudentId(Long id) {
		return repo.byStudentId(id);
	}

}
