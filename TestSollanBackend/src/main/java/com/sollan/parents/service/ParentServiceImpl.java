package com.sollan.parents.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sollan.parents.model.Parent;
import com.sollan.parents.repo.ParentRepository;
import com.sollan.user.model.User;

@Service
public class ParentServiceImpl implements ParentService {
	
	
	@Autowired
	private ParentRepository repo;
	
	@Override
	public User findByUsername(String username) {
		return Optional.ofNullable(repo.findByUsername(username)).orElse(null);
	}

	@Override
	public List<Parent> getAll() {
		 return StreamSupport.stream(repo.findAll().spliterator(), false)
				    .collect(Collectors.toList());
	}

	@Override
	public void save(Parent t) {
		repo.save(t);
		
	}

	@Override
	public void delete(Long id) {
		repo.delete(id);
		
	}

	@Override
	public Parent getById(Long id) {
		return repo.findOne(id);
	}

	@Override
	public long count() {
		return repo.count();
	}
	
	
	

}
