package com.sollan.parents.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.parents.model.Parent;
import com.sollan.parents.service.ParentService;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemResponse;
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
	public ItemResponse<Parent>  saveOrUpdate(@RequestBody Parent parent) {
		return ResponseUtil.runInItemTemplate(() -> service.save(parent));
	}
	
	@RequestMapping(value = BackendMappings.Parent.BY_ID, method = RequestMethod.GET)
	public ItemResponse<Parent>  byId(@RequestParam("id") Long id) {
		return ResponseUtil.runInItemTemplate(() -> service.getById(id));
	}
	
	@RequestMapping(value = BackendMappings.Parent.REMOVE, method = RequestMethod.GET)
	public Response remove(@RequestParam("id") Long id) {
		return ResponseUtil.runInVoidTemplate(() -> service.delete(id));
	}
	
	@RequestMapping(value = BackendMappings.Parent.ADD_CHILDREN, method = RequestMethod.GET)
	public Response addChildren(@RequestParam("childrenIds") List<Long> ids, @RequestParam("parentId") Long parentId) {
		return ResponseUtil.runInVoidTemplate(() -> service.addChildren(ids, parentId));
	}
	
}
