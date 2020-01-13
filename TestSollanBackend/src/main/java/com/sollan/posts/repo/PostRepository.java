package com.sollan.posts.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sollan.posts.model.Post;


@Repository("postRepository")
public interface PostRepository extends CrudRepository<Post, Long>{

}
