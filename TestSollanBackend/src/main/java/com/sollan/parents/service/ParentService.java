package com.sollan.parents.service;

import java.util.List;

import com.sollan.parents.model.Parent;
import com.sollan.user.UserService;

public interface ParentService extends UserService<Parent>{
	
	
	void addChildren(List<Long> ids, Long parentId);
	
}
