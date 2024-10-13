import { User } from './user';
import { Course } from './course';


export class Lecturer {
    private id?: number;
    private user: User;
    private expertise: string;
    private courses: Course[];


    constructor(lecturer: { user: User; expertise: string; id?: number, courses: Course[] }) {
        this.id = lecturer.id;
        this.user = lecturer.user;
        this.expertise = lecturer.expertise;
        this.courses = lecturer.courses;

    }

    getId(): number | undefined {
        return this.id;
    }

    getUser(): User {
        return this.user;
    }

    getExpertise(): string {
        return this.expertise;
    }

    getCourses(): Course[] {
        return this.courses;
    }


    equals(lecturer: Lecturer): boolean {
        return (
            this.id === lecturer.getId() &&
            this.user.equals(lecturer.getUser()) &&
            this.expertise === lecturer.getExpertise() &&
            lecturer.getCourses().every((course, index) => course.equals(this.courses[index]))
        );
    }
}
