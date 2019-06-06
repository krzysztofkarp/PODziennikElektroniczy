package com.sollan.parents;

import java.util.List;

public interface ParentService {
	
	
	List<Parent> getAll();
	List<Parent> getForId(String id);

}
