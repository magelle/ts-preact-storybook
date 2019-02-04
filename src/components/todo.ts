export interface Todo {
    text: string;
}

export class Todos {
    constructor(private todos: Todo[] = []) {}

    public add(todo: Todo) {
        this.todos.push(todo)
    }

    public getTodos() {
        return this.todos
    }
}
