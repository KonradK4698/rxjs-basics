const { interval, fromEvent } = rxjs; 
const { takeUntil } = rxjs.operators;

const counter$ = interval(1000); 
const click$ = fromEvent(document, 'click'); 

counter$.pipe(
    takeUntil(click$) //zatrzymuje działanie w momencie wywołania kliknięcia
).subscribe(console.log)