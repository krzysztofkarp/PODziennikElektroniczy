package com.sollan.posts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.auth.aspect.annotation.Token;
import com.sollan.auth.aspect.annotation.ValidateToken;
import com.sollan.posts.model.Post;
import com.sollan.posts.service.PostService;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemResponse;
import com.sollan.util.response.ItemsResponse;
import com.sollan.util.response.Response;
import com.sollan.util.response.ResponseUtil;

@RestController
public class PostController {
	
	@Autowired
	private PostService service;
	
	
	@ValidateToken
	@RequestMapping(value = BackendMappings.Post.ALL, method = RequestMethod.GET)
	public ItemsResponse<Post> getAll(@RequestHeader("X-AUTH-TOKEN") @Token String token){
		return ResponseUtil.runInMultiTemplate(() -> service.getAll());
	}
	
	@ValidateToken
	@RequestMapping(value = BackendMappings.Post.SAVE, method = RequestMethod.POST)
	public ItemResponse<Post> save(@RequestHeader("X-AUTH-TOKEN") @Token String token, @RequestBody Post post){
		return ResponseUtil.runInItemTemplate(() -> service.save(post));
	}
	
	@ValidateToken
	@RequestMapping(value = BackendMappings.Post.REMOVE, method = RequestMethod.GET)
	public Response remove(@RequestHeader("X-AUTH-TOKEN") @Token String token, @RequestParam("id")Long id){
		return ResponseUtil.runInVoidTemplate(() -> service.remove(id));
	}

}
