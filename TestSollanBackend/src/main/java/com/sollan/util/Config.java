package com.sollan.util;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;



@Component
public class Config {

	@Value("${spring.datasource.username}")
	private String datasourceUsername;
	
	@Value("${spring.datasource.password}")
	private String datasourcePassword;
	
	@Value("${adm.login}")
	private String adminLogin;
	
	@Value("${adm.password}")
	private String adminPassword;
	
	@Value("${spring.mail.username}")
	private String email;
	
	@Value("${spring.mail.password}")
	private String emailPassword;
	
		

	public String getDatasourceUsername() {
		return datasourceUsername;
	}
	public String getDatasourcePassword() {
		return datasourcePassword;
	}
	public String getAdminLogin() {
		return adminLogin;
	}
	public String getAdminPassword() {
		return adminPassword;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEmailPassword() {
		return emailPassword;
	}
	public void setEmailPassword(String emailPassword) {
		this.emailPassword = emailPassword;
	}
	public void setDatasourceUsername(String datasourceUsername) {
		this.datasourceUsername = datasourceUsername;
	}
	public void setDatasourcePassword(String datasourcePassword) {
		this.datasourcePassword = datasourcePassword;
	}
	public void setAdminLogin(String adminLogin) {
		this.adminLogin = adminLogin;
	}
	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}
	
	
	
	



	
}

