package com.sollan.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.timer.service.TimerService;

@RestController
public class TestController {


	

	@RequestMapping(value = "/api/test", method = RequestMethod.GET)
	public String test() {
		
		
		
		return "135678";
		
	}
<<<<<<< HEAD:TestSollanBackend/src/main/java/com/sollan/TestController.java
}

=======
	
	

}
>>>>>>> f8ba86cffadb859280cca298247f9f7b2d6d3ac4:TestSollanBackend/src/main/java/com/sollan/main/TestController.java
