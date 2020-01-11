package com.sollan.grades.service;

import java.io.FileNotFoundException;

import javax.servlet.http.HttpServletResponse;

public interface GradeDownloadService {
	
	
	void download(Long studentId, Long classId,HttpServletResponse resp) throws FileNotFoundException, Exception;

}
