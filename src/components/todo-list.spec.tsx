import { h } from 'preact';
import { shallow } from 'preact-render-spy';
import TodoList from './todo-list';

it('should display a list of todos', () => {
    const todos = [{text: "toto 1"}, {text: "toto 2"}, {text: "toto 3"}];
    const context = shallow(<TodoList todos={todos} />);
    const items = context.find('li');

    setTimeout(() => {
        console.log(items);
        expect(items.contains("toto 1")).toBeTruthy();
        expect(items.contains("toto 2")).toBeTruthy();
        expect(items.contains("toto 3")).toBeTruthy();
    }, 10);
});

it('should add a todo', () => {
    const todos = [];
    const context = shallow(<TodoList todos={todos} />);

    context.find('input').simulate('onChange', {value: "new todo"});
    context.find('button').simulate('click');
    
    setTimeout(() => {
        expect(context.find('li').contains("new toto")).toBeTruthy();
    }, 10);
});