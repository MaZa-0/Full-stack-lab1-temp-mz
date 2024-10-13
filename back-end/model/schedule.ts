import { Course } from "./course";
import { Lecturer } from "./lecturer";
import { Student } from "./student";
export class Schedule {

    private id?: number;
    private start: Date;
    private end: Date;
    private course: Course;
    private lecturer: Lecturer;
    private students: Student[];

    constructor(schedule: {
        id?: number,
        start: Date,
        end: Date,
        course: Course,
        lecturer: Lecturer,
        students: Student[]
    }) {
        this.id = schedule.id;
        this.start = schedule.start;
        this.end = schedule.end;
        this.course = schedule.course;
        this.lecturer = schedule.lecturer;
        this.students = schedule.students;
    }

    addStudentToSchedule(student: Student, schedule: Schedule) {
        if (schedule.getStudents().includes(student)) {
            return
        } else {
            this.students.push(student)
        }

        //TODO
    }

    getID(): number | undefined {
        return this.id
    }

    getStart(): Date {
        return this.start;
    }

    getEnd(): Date {
        return this.end;
    }

    getCourse(): Course {
        return this.course;
    }

    getLecturer(): Lecturer {
        return this.lecturer
    }

    getStudents(): Student[] {
        return this.students
    }


}