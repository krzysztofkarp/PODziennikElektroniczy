package com.sollan.subjects.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.subjects.model.Subject;
import com.sollan.subjects.repo.SubjectRepository;
import com.sollan.util.Utils;


@Service
public class SubjectServiceImpl implements SubjectService {
	
	
	@Autowired
	private SubjectRepository repo;

	@Override
	public List<Subject> getAll() {
		return Utils.asList(repo.findAll());
	}

	@Override
	public Subject save(Subject s) {
		return repo.save(s);
	}
	
	@Override
	public void delete(Subject s) {
		Subject sub = repo.findById(s.getSubjectId()).get();
		sub.getTeachers().forEach(t -> t.removeSubject(sub));
		sub.getClasses().forEach(cl -> cl.removeSubject(sub));
		repo.save(sub);
		repo.delete(sub);
	}

	@Override
	public List<Subject> byTeacherId(Long teacherId) {
		return Utils.asList(repo.byTeacherId(teacherId));
	}

	@Override
	public List<Subject> byClassId(Long classId) {
		return Utils.asList(repo.byClassId(classId));
	}

	@Override
	public Subject byId(Long id) {
		return repo.findById(id).get();
	}

	@Override
	public List<Subject> byIds(List<Long> ids) {
		return Utils.asList(repo.findAllById(ids));
		
	}
	
	

}
