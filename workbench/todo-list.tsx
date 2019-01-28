import { storiesOf } from '@kadira/storybook';
import { h } from 'preact';
import TodoList from '../src/components/todo-list';
import Todo from '../src/components/todo';

declare var module;

storiesOf('Todo List', module)
    .add('Empty todo list', () => {
        const todos: Todo[] = [];
        return (<TodoList todos={todos} />);
    })
    .add('Todo list with items', () => {
        const todos: Todo[] = [{text: 'Learn Preact'}, {text: 'Do Unit tests'}];
        return (<TodoList todos={todos} />);
    });
