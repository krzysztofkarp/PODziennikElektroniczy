package com.sollan.user.generator;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.sollan.classes.model.StudentClass.ClassProfile;
import com.sollan.parents.model.Parent;
import com.sollan.students.model.Student;
import com.sollan.students.model.Student.Grade;
import com.sollan.subjects.Subjects;
import com.sollan.subjects.Subjects.Subject;
import com.sollan.teachers.Teacher;
import com.sollan.user.model.User;

@Service
public class RandomUserGeneratorImpl implements RandomUserGenerator {

	@Override
	public List<Student> getRandomStudents(int amount) {
		List<Student> students = new ArrayList<>();
		
		while(amount > 0) {
//			String classId = UserFieldsGenerator.getClassId();
//			ClassProfile profile = UserFieldsGenerator.getProfile(classId);
//			Student s = new Student(UUID.randomUUID().toString(), UserFieldsGenerator.getName(), UserFieldsGenerator.getSurname(), classId, profile);
//			setGrades(s, 5);
//			students.add(s);
//			amount--;
		}
		
		
		return students;
	}
	
	@Override
	public List<Student> getRandomStudents(int amount, String classId) {
		return getStudents(amount, classId);
	}
	
	
	
	

	@Override
	public List<Teacher> getRandomTeachers(String classId) {
		List<Subject> subs = Subjects.getSubjectsForProfile(UserFieldsGenerator.getProfile(classId));
		List<Teacher> teachers = new ArrayList<>();
		subs.stream().forEach(s -> {
			//Teacher t = new Teacher(UUID.randomUUID().toString(), UserFieldsGenerator.getName(), UserFieldsGenerator.getSurname(), false, Arrays.asList(s), Arrays.asList(classId));
			//teachers.add(t);
			
		});
		
		return teachers;
	}

	@Override
	public List<Student> getRandomStudentsForClass(int amount) {
		
		List<Student> students = new ArrayList<>();
		String[] classes = UserFieldsGenerator.defaultClasses;
		
		for( String c: classes) {
			students.addAll(getStudents(amount, c));
		}
		
		//return students.stream().filter(distinctByKey(User::getLogin)).collect(Collectors.toList());
		return null;
		
		
		
	}
	
	@Override
	public Parent getRandomParentForId(String childId, String surname) {
		//Parent p = new Parent(UUID.randomUUID().toString(), UserFieldsGenerator.getName(), surname, Arrays.asList(childId));
		return null;
	}
	
	private List<Student> getStudents(int amount, String classId){
		
		List<Student> students = new ArrayList<>();
		
		while(amount > 0) {
			//Student s = new Student(UUID.randomUUID().toString(), UserFieldsGenerator.getName(), UserFieldsGenerator.getSurname(), classId, UserFieldsGenerator.getProfile(classId));
//			setGrades(s, 5);
//			
//			
//			if(!(students.stream().anyMatch(st -> st.getLogin().equals(s.getLogin()))))
//				students.add(s);
//			
//			
//			amount--;
		}
		
		
		return students;
	}
	
	private void setGrades(Student s, int amount){
		
		Map<String, List<Grade>> grads = s.getGrades();
		
		for(String sub : grads.keySet()) {
			
			List<Grade> grades = new ArrayList<Grade>();
			
			for(int i = 0; i< amount; i++) {
				grades.add(Grade.getRandom());
			}
			
			grads.put(sub, grades);
			
		}
		
	}
	
	public static <T> Predicate<T> distinctByKey(Function<? super T, ?> keyExtractor) {
	    Set<Object> seen = ConcurrentHashMap.newKeySet();
	    return t -> seen.add(keyExtractor.apply(t));
	}
	
	
	
	

	

}
