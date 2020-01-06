package com.sollan.user;

import java.util.List;

import com.sollan.user.model.User;

public interface UserService<T extends User> {
	
	
	User findByUsername(String username);
	List<T> getAll();
	T save(T t);
	void delete(Long id);
	T getById(Long id);
	long count();
	void changePassword(Long userId, String newPassword);

}
