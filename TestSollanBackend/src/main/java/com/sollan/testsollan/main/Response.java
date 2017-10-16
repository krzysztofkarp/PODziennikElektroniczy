package com.sollan.testsollan.main;

import java.util.Collection;

public class Response<T> {

	private boolean ok;

	private String message;

	private T item;

	private Collection<T> items;

	public Response() {
		this.ok = true;
	}

	public Response(T item) {
		this();
		this.item = item;
	}

	public Response(String message) {
		this.ok = false;
		this.message = message;
	}

	public Response(Collection<T> items) {
		this();
		this.items = items;
	}

	public static <T> Response<T> createMulti(Collection<T> items) {
		final Response<T> response = new Response<>();
		response.setItems(items);
		return response;
	}

	public boolean isOk() {
		return ok;
	}

	public void setOk(boolean ok) {
		this.ok = ok;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public T getItem() {
		return item;
	}

	public void setItem(T item) {
		this.item = item;
	}

	public Collection<T> getItems() {
		return items;
	}

	public void setItems(Collection<T> items) {
		this.items = items;
	}

	public void getItem(boolean timeStarted) {
		// TODO Auto-generated method stub
		
	}
}