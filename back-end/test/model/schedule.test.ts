import { Schedule } from '../../model/schedule';
import { Course } from '../../model/course';
import { Lecturer } from '../../model/lecturer';
import { Student } from '../../model/student';
import { User } from '../../model/user';
import { set } from 'date-fns';

test(`given: valid values for schedule, when: schedule is created, then: schedule is created with those values`, () => {
    //given
    const startDate = set(new Date(), { hours: 8, minutes: 30 });
    const endDate = set(new Date(), { hours: 10, minutes: 30 });
    const testCourse = new Course({
        name: 'Full Stack Development',
        description: 'Learn Full Stack Development',
        phase: 2,
        credits: 6
    });
    const userLecturer = new User({
        username: 'Johan.Pieck',
        firstName: 'Johan',
        lastName: 'Pieck',
        email: 'johan.pieck@ucll.be',
        password: 'password',
        role: 'lecturer'
    });
    const courseLecturer = new Lecturer({
        user: userLecturer,
        expertise: 'Full Stack Development',
        courses: [testCourse]
    });
    const userStudent = new User({
        username: 'Matthew.Zavalick',
        firstName: 'Matthew',
        lastName: 'Zavalick',
        email: 'matthew.zavalick@ucll.be',
        password: 'password',
        role: 'student'
    });
    const courseStudent = new Student({
        user: userStudent,
        studentnumber: 'r0971981'
    })

    //when
    const schedule = new Schedule({
        start: startDate,
        end: endDate,
        course: testCourse,
        lecturer: courseLecturer,
        students: [courseStudent]
    });

    //then
    expect(schedule.getID()).toEqual(undefined);
    expect(schedule.getStart()).toEqual(startDate);
    expect(schedule.getEnd()).toEqual(endDate);
    expect(schedule.getCourse()).toEqual(testCourse);
    expect(schedule.getLecturer()).toEqual(courseLecturer);
    expect(schedule.getStudents()).toEqual([courseStudent]);
});

test(`given: an existing schedule, when: adding a student to schedule, then: student is registered for schedule`, () => {
    //given
    const startDate = set(new Date(), { hours: 8, minutes: 30 });
    const endDate = set(new Date(), { hours: 10, minutes: 30 });
    const testCourse = new Course({
        name: 'Full Stack Development',
        description: 'Learn Full Stack Development',
        phase: 2,
        credits: 6
    });
    const userLecturer = new User({
        username: 'Johan.Pieck',
        firstName: 'Johan',
        lastName: 'Pieck',
        email: 'johan.pieck@ucll.be',
        password: 'password',
        role: 'lecturer'
    });
    const courseLecturer = new Lecturer({
        user: userLecturer,
        expertise: 'Full Stack Development',
        courses: [testCourse]
    });
    const userStudent = new User({
        username: 'Matthew.Zavalick',
        firstName: 'Matthew',
        lastName: 'Zavalick',
        email: 'matthew.zavalick@ucll.be',
        password: 'password',
        role: 'student'
    });
    const courseStudent = new Student({
        user: userStudent,
        studentnumber: 'r0971981'
    });
    const userStudent2 = new User({
        username: 'Jane.Doe',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@ucll.be',
        password: 'student2',
        role: 'student'
    });
    const courseStudent2 = new Student({
        user: userStudent2,
        studentnumber: 'r0971982'
    });
    const schedule = new Schedule({
        start: startDate,
        end: endDate,
        course: testCourse,
        lecturer: courseLecturer,
        students: [courseStudent]
    });
    //when
    schedule.addStudentToSchedule(courseStudent2, schedule);
    //then
    expect(schedule.getStudents()).toEqual([courseStudent, courseStudent2]);
});

test(`given: an existing schedule, when: a student that is in schedule is added again, then: student is not added twice`, () => {
    //given
    const startDate = set(new Date(), { hours: 8, minutes: 30 });
    const endDate = set(new Date(), { hours: 10, minutes: 30 });
    const testCourse = new Course({
        name: 'Full Stack Development',
        description: 'Learn Full Stack Development',
        phase: 2,
        credits: 6
    });
    const userLecturer = new User({
        username: 'Johan.Pieck',
        firstName: 'Johan',
        lastName: 'Pieck',
        email: 'johan.pieck@ucll.be',
        password: 'password',
        role: 'lecturer'
    });
    const courseLecturer = new Lecturer({
        user: userLecturer,
        expertise: 'Full Stack Development',
        courses: [testCourse]
    });
    const userStudent = new User({
        username: 'Matthew.Zavalick',
        firstName: 'Matthew',
        lastName: 'Zavalick',
        email: 'matthew.zavalick@ucll.be',
        password: 'password',
        role: 'student'
    });
    const courseStudent = new Student({
        user: userStudent,
        studentnumber: 'r0971981'
    });
    const userStudent2 = new User({
        username: 'Jane.Doe',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@ucll.be',
        password: 'student2',
        role: 'student'
    });
    const courseStudent2 = new Student({
        user: userStudent2,
        studentnumber: 'r0971982'
    });
    const schedule = new Schedule({
        start: startDate,
        end: endDate,
        course: testCourse,
        lecturer: courseLecturer,
        students: [courseStudent, courseStudent2]
    });
    //when
    schedule.addStudentToSchedule(courseStudent2, schedule);
    //then
    expect(schedule.getStudents()).toEqual([courseStudent, courseStudent2])
});
