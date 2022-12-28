import Todo from './Todo';

export default function Page1(element: HTMLDivElement) {
  const ele = element;

  ele.className = 'page-1';
  ele.style.display = 'none';

  Todo(ele);
}
