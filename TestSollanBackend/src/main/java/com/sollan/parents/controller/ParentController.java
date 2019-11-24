package com.sollan.parents.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.parents.model.Parent;
import com.sollan.parents.service.ParentService;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemsResponse;
import com.sollan.util.response.Response;
import com.sollan.util.response.ResponseUtil;

@RestController
public class ParentController {
	
	@Autowired
	private ParentService service;
	
	
	
	@RequestMapping(value = BackendMappings.Parent.ALL, method = RequestMethod.GET)
	public ItemsResponse<Parent> getAll() {
		return ResponseUtil.runInMultiTemplate(() -> service.getAll());
	}
	

	@RequestMapping(value = BackendMappings.Parent.SAVE_OR_UPDATE, method = RequestMethod.POST)
	public Response  saveOrUpdate(@RequestBody Parent parent) {
		return ResponseUtil.runInVoidTemplate(() -> service.save(parent));
	}
	
	@RequestMapping(value = BackendMappings.Parent.REMOVE, method = RequestMethod.GET)
	public Response remove(@RequestParam("id") Long id) {
		return ResponseUtil.runInVoidTemplate(() -> service.delete(id));
	}
	
}
