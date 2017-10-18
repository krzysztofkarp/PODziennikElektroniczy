package com.sollan.testsollan.forward;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardController {

private static final String FORWARD="forward:/";


   @RequestMapping(value = "/**/{[path:[^\\.]*}")
   public String redirect() {
       // Forward to home page so that route is preserved.
       return FORWARD;
   }
} 