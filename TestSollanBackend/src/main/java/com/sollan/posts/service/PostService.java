package com.sollan.posts.service;

import java.util.List;

import com.sollan.posts.model.Post;

public interface PostService {
	
	
	
	List<Post> getAll();
	Post save(Post post);
	void remove(Long id);

}
