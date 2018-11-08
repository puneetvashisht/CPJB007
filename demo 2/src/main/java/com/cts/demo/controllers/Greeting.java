package com.cts.demo.controllers;

public class Greeting {
	
	String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Greeting(String message) {
		super();
		this.message = message;
	}

	public Greeting() {
		super();
	}

	@Override
	public String toString() {
		return "Greeting [message=" + message + "]";
	}
	
	

}
