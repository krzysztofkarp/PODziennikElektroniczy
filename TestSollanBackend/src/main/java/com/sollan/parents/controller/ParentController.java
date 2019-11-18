package com.sollan.parents.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.sollan.parents.model.Parent;
import com.sollan.parents.service.ParentService;
import com.sollan.util.BackendMappings;
import com.sollan.util.Response;

@RestController
public class ParentController {
	
	@Autowired
	private ParentService service;
	
	
	
	@RequestMapping(value = BackendMappings.Parent.ALL, method = RequestMethod.GET)
	public Response<Parent> getAll() {
		Response<Parent> response = new Response<Parent>();
		response.setItems(service.getAll());
		return response;
	}
	

	@RequestMapping(value = BackendMappings.Parent.SAVE_OR_UPDATE, method = RequestMethod.POST)
	public @ResponseBody void byIds(@RequestBody Parent parent) {
		service.save(parent);
	}
	
}
