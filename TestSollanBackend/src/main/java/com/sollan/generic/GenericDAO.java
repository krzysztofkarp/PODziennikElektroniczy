package com.sollan.generic;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import com.sollan.user.model.User;


public abstract class GenericDAO<T extends User> {
	
	
	protected Map<String, T> repository;
	
	@PostConstruct
	private void init() {
		repository = new HashMap<>();
	}
	
	
	public List<T> getAll(){
		return repository.values().stream().collect(Collectors.toList());
	}
	
	public List<T> getByIds(Collection<String> ids){
		List<T> l = new ArrayList<>();
		ids.forEach(id -> {
			l.add(getById(id));
		});
		return l;
	}
	
	
	public T getById(String id){
		return repository.get(id);
	}
	
	public T getByLogin(String login) {
		return repository.values().stream().filter(s -> s.getLogin().equals(login)).findFirst().get();
	}
	
	public void update(T u) {
		try {
			repository.put(u.getId(), u);
		} catch (Exception e) {
			System.out.println("Error updating User");
		}
	}
	

}
