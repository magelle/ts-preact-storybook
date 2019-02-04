import { h } from 'preact';
import { shallow } from 'preact-render-spy';
import TodoItem from './todo-item';

it('Can display an item', () => {
  const context = shallow(<TodoItem text="coucou" />);
  expect(context.find('li').contains("coucou")).toBeTruthy();
});