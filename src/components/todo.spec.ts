import { Todo, Todos } from './todo';

test('Todos should be empty at creation', () => {
  expect(new Todos().getTodos().length).toBe(0);
});

test('Todos should add a toto', () => {
  const todos = new Todos();
  const todo = { text: "Make some test" };
  expect(todos.getTodos().length).toBe(0);
  todos.add(todo);
  expect(todos.getTodos().length).toBe(1);
  const firstTodo = todos.getTodos()[0];
  expect(firstTodo.text).toEqual("Make some test");
});