export class Todo {
    id!: number;
    task!: string;
    expiration!: Date;
    comments: string[] = [];

    constructor(id: number, task: string, expiration: Date, comments: string[] = []) {
        this.id = id;
        this.task = task;
        this.expiration = expiration;
        this.comments = comments;
    }
}