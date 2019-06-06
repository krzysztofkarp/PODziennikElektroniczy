package com.sollan.notes.model;

import java.util.Date;
import java.util.UUID;

public class Note {
	
	private String id;
	private String from;
	private String to;
	private String description;
	private Date date;
	private String fromLabel;
	private String toLabel;
	
	public Note() {
		
	}
	
	public Note(String from, String to, String description) {
		this.id = UUID.randomUUID().toString();
		this.from = from;
		this.to= to;
		this.description = description;
		this.date = new Date();
	}
	
	
	
	
	
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}

	public String getFromLabel() {
		return fromLabel;
	}

	public void setFromLabel(String fromLabel) {
		this.fromLabel = fromLabel;
	}

	public String getToLabel() {
		return toLabel;
	}

	public void setToLabel(String toLabel) {
		this.toLabel = toLabel;
	}
	
	
	
	
	

}
