const { fromEvent,interval } = rxjs; 
const { debounceTime, pluck, distinctUntilChanged, debounce } = rxjs.operators; 

const inputBox = document.querySelector('#text-input');

const click$  = fromEvent(document, 'click'); 
const input$ = fromEvent(inputBox, 'keyup'); 

input$.pipe(
    debounce( () => interval(1000)),
    // debounceTime(1000), //co sekundę pobiera ostatnio wykonaną czynność / wprowadzoną wartośc itp.
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log)