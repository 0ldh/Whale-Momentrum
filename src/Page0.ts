import Clock from './Clock';
import Quote from './Quotes';

export default function Page0(element: HTMLDivElement):void {
  const ele = element;

  ele.className = 'page-0';

  const clock = document.createElement('div');
  clock.className = 'clock_date';
  ele.appendChild(clock);

  const quote = document.createElement('div');
  ele.appendChild(quote);

  Clock(clock);
  Quote(quote);
}
