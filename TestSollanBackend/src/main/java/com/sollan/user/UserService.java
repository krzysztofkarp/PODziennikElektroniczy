package com.sollan.user;

import java.util.List;

import com.sollan.user.model.User;

public interface UserService<T extends User> {
	
	
	User findByUsername(String username);
	List<T> getAll();
	void save(T t);
	void delete(Long id);
	T getById(Long id);
	long count();

}
