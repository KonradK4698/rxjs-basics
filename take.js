const { of, fromEvent } = rxjs;
const { take, map, first } = rxjs.operators;

const numbers$ = of(1,2,3,4,5);

numbers$.pipe(
    take(3)
).subscribe({
    next: console.log, 
    complete: () => console.log("complete")
})

const click$ = fromEvent(document, 'click');

click$.pipe(
    map(event => ({
        x: event.clientX, 
        y: event.clientY
    })),
    // take(1)
    //pobranie pierwszej wartości, dla której wartość Y jest większa od 200
    first(({y}) => y > 200)
).subscribe({
    next: console.log, 
    complete: () => console.log("complete")
})