package com.sollan;



import javax.annotation.PreDestroy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


/**
 * @author kkarp
 *
 */
@SpringBootApplication
public class TestApp{
	
	
	private static final Logger LOGGER = LoggerFactory.getLogger(TestApp.class);

	
	public static void main(String[] args) {
		SpringApplication.run(TestApp.class, args);
		
	}
	
	
	@PreDestroy
	  public void onExit() {
	    java.util.logging.Logger.getGlobal().info("###STOPing###");
	    try {
	      Thread.sleep(5 * 1000);
	    } catch (InterruptedException e) {
	      LOGGER.error("", e);;
	    }
	    LOGGER.info("###STOP FROM THE LIFECYCLE###");
	  }
	
}
