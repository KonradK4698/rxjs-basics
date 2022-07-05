var { of, fromEvent } = rxjs;
var { map, pluck, mapTo } = rxjs.operators;

of(1,2,3,4,5).pipe(
    map(value => value * 10)
).subscribe(console.log)

const keyup$ = fromEvent(document, 'keyup');
const keycode$ = keyup$.pipe(
    map(event => event.code)
);

const keycodeWithPluck$ = keyup$.pipe(
    pluck('code')
);

const pressed$ = keyup$.pipe(
    mapTo('Przycisk wciśnięty!') //zawsze zwraca tą samą wartość
);


pressed$.subscribe(console.log);