import Todo from './Todo';

export default function Page1(element: HTMLLIElement) {
  const ele = element;

  ele.className = 'page-1';

  Todo(ele);
}
