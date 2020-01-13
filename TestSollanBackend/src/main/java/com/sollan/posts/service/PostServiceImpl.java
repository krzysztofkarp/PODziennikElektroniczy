package com.sollan.posts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.posts.model.Post;
import com.sollan.posts.repo.PostRepository;
import com.sollan.util.Utils;


@Service
public class PostServiceImpl implements PostService {
	
	
	@Autowired
	private PostRepository repo;

	@Override
	public List<Post> getAll() {
		return Utils.asList(repo.findAll());
	}

	@Override
	public Post save(Post post) {
		return repo.save(post);
	}

	@Override
	public void remove(Long id) {
		repo.deleteById(id);
	}

}
