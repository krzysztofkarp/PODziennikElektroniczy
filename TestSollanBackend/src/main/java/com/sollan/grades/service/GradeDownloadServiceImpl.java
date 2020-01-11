package com.sollan.grades.service;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import org.apache.tomcat.util.buf.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;
import com.sollan.classes.model.StudentClass;
import com.sollan.classes.service.StudentClassService;
import com.sollan.grades.model.Grade;
import com.sollan.students.model.Student;
import com.sollan.students.service.StudentService;
import com.sollan.subjects.model.Subject;
import com.sollan.subjects.service.SubjectService;
import com.sollan.util.Utils;


@Service
public class GradeDownloadServiceImpl implements GradeDownloadService {
	
	private static final Logger log = LoggerFactory.getLogger(GradeDownloadServiceImpl.class);

	
	@Autowired
	private GradeService service;
	
	@Autowired
	private SubjectService subService;
	
	@Autowired
	private StudentService sService;
	
	@Autowired
	private StudentClassService classService;
	
	private Font font;
	
	
	
	@PostConstruct
	private void loadFont() {
		 try {
			BaseFont bf = BaseFont.createFont("c:/windows/fonts/arial.ttf", 
					 BaseFont.CP1250, BaseFont.EMBEDDED);
			font = new Font(bf, 12); 
		} catch (DocumentException e) {
			log.error(e.getMessage());
		} catch (IOException e) {
			log.error(e.getMessage());
		}
	}

	@Override
	public void download(Long studentId, Long classId, HttpServletResponse resp) throws FileNotFoundException, Exception {
		List<Subject> subjects = subService.byClassId(classId);
		create(studentId+"grades.pdf",prepareGradesMap(subjects, studentId), studentId);
		Utils.serveFile(new FileInputStream(studentId+"grades.pdf"), studentId+"grades.pdf", "application/pdf", resp);
	}
	
	
	public void create(String name,Map<String, String> map,  Long studentId) {
		Document document = new Document();
		try {
			fillDocument(document, name, map, studentId);
		} catch (FileNotFoundException e) {
			log.error(e.getMessage());
		} catch (DocumentException e) {
			log.error(e.getMessage());
		} 
	}
	
	private void fillDocument(Document document, String fileName, Map<String, String> map, Long studentId) throws FileNotFoundException, DocumentException {
		PdfWriter.getInstance(document, new FileOutputStream(fileName));
		document.open();
		addParagraphs(studentId, document);
		PdfPTable table = new PdfPTable(2);
		map.keySet().forEach(k -> handleForSubject(table, k, map.get(k)));
		document.add(table);
		document.close();
	}
	
	private void addParagraphs(Long studentId, Document document) throws DocumentException {
		Student s = sService.getById(studentId);
		StudentClass sc = classService.getClass(studentId);
		Font font = FontFactory.getFont(FontFactory.HELVETICA, 18, BaseColor.BLACK);
		Chunk chunk = new Chunk(s.getFirstName() + " " +s.getSecondName(), font);
		font.setSize(18);
		Chunk classChunk = new Chunk("Klasa: " + " " +sc.getName(), font);
		document.add(new Paragraph(chunk));
		document.add(new Paragraph(classChunk));
		document.add(new Paragraph(" "));
		document.add(new LineSeparator());
		document.add(new Paragraph(" "));
	}
	
	
	private void handleForSubject(PdfPTable table, String subject, String grades) {
		 PdfPCell header = new PdfPCell();
		 header.setBackgroundColor(BaseColor.LIGHT_GRAY);
	     header.setPhrase(new Phrase(subject, font));
	     table.addCell(header);
	     table.addCell(grades);
	     table.setComplete(true);
	}
	
	private Map<String, String> prepareGradesMap(List<Subject> subjects, Long studentId) {
		Map<String, String> gradesMap = new HashMap<String, String>();		
		
		subjects.forEach(sub -> {
			List<Grade> gr = service.byStudentAndSubjectId(studentId, sub.getSubjectId());
			gradesMap.put(sub.getName(), 
					StringUtils.join(gr.stream().map(g -> g.getValue()+"").collect(Collectors.toList()), ','));
			
		});
		
		return gradesMap;
	}
	

}
