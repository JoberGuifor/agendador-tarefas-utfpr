export class Task {
    id!: number;
    description?: string;

    constructor(public date: Date, public hourStart?: string, public hourFinish?: string, description?: string) {
        this.id = Math.round(Math.random() * 1000);
        this.hourStart = hourStart;
        this.hourFinish = hourFinish;
        this.description = description;
        this.date = new Date();
    }
}
