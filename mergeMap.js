const {fromEvent, interval } = rxjs; 
const { ajax } = rxjs.ajax;
const { map, mergeMap, takeUntil} = rxjs.operators; 

const mousedown$ = fromEvent(document, 'mousedown'); 
const mouseup$ = fromEvent(document, 'mouseup'); 
const interval$ = interval(1000);

mousedown$.pipe(
    mergeMap(() => interval$.pipe( //merge map subskrybuje wartości na których pracuje
        takeUntil(mouseup$) //wykonuje działanie wewnątrz mergeMap dopóki nie zostanie zwolniony przycisk
    ))
).subscribe(console.log)

const click$ = fromEvent(document, 'click'); 

const coordinates$ = click$.pipe(
    map((event)=>({
        x: event.clientX, 
        y: event.clientY
    }))
);

const coordinatesWithSave$ = coordinates$.pipe(
    mergeMap(coords => ajax.post(
        'https://www.mocky.io/v2/5185415ba171ea3a00704eed', coords
    ))
)

coordinatesWithSave$.subscribe(console.log)