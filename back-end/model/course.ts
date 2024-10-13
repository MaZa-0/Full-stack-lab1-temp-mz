export class Course {
    private id?: number;
    private name: string;
    private description: string;
    private phase: number;
    private credits: number;

    constructor(course: { id?: number, name: string, description: string,
        phase: number, credits: number }) {
            this.id = course.id;
            this.name = course.name;
            this.description = course.description;
            this.phase = course.phase;
            this.credits = course.credits;
        }

        public getId(): number | undefined {
            return this.id;
        }

        public getName(): string {
            return this.name;
        }

        public getDescription(): string {
            return this.description;
        }

        public getPhase(): number {
            return this.phase;
        }

        public getCredits(): number {
            return this.credits;
        }

        public equals(course: Course): boolean {
            return this.id === course.id &&
            this.name === course.name &&
            this.description === course.description &&
            this.phase === course.phase &&
            this.credits === course.credits;
        }

}