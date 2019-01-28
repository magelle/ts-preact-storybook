import { Component, h } from 'preact';
import TodoItem from './todo-item';
import Todo from './todo';

interface TodoListProps {
  todos?: Todo[];
}

interface TodoListState {
  todos: Todo[];
  text: string;
}

export default class TodoList extends Component<TodoListProps, TodoListState> {
  static defaultProps: TodoListProps = {
    todos: []
  };

  state = { todos: [], text: '' };

  componentWillMount() {
    if (this.props.todos) {
      this.setState({todos: this.props.todos});
    }
  }

  setText = (e: Event) => {
    this.setState({
      text: (e.target as HTMLInputElement).value
    } as TodoListState);
  }

  addTodo = () => {
    const { todos, text } = this.state;

    this.setState({
      todos: [...todos, { text }],
      text: ''
    });
  }

  render({}, { todos, text }) {
    return (
      <form onSubmit={this.addTodo} action="javascript:">
        <input value={text} onInput={this.setText} />
        <button type="submit">Add</button>
        <ul>{todos.map(todo => <TodoItem text={todo.text} />)}</ul>
      </form>
    );
  }
}
