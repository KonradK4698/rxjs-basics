import { interval, timer } from "rxjs";

const timer$ = interval(1000);
const timer2$ = timer(500, 1000);

// timer$.subscribe(console.log)
timer2$.subscribe(console.log)