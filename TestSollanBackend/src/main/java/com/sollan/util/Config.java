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
	
	



	
}

