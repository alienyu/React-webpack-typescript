import { observable, action, computed, autorun } from 'mobx'

export interface IObservableTodoStore {
    todos: any[],
    pendingRequests: number
}

class ObservableTodoStore {

    @observable todos: any[] = [];
    @observable pendingRequests: number = 0;

    constructor() {
        autorun(() => console.log(this.report));
    }
    get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }
    @computed get report() {
        if (this.todos.length === 0)
            return "<none>";
        return `Next todos: "${this.todos[0].task}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        });
    }
}
export default new ObservableTodoStore();