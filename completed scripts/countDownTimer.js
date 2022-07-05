const { interval } = rxjs;
const { scan, mapTo, filter, takeWhile, takeUntil } = rxjs.operators;

const countdown = document.querySelector('#countDown')
const message = document.querySelector('#message')
const abort = document.querySelector('#abortMission')

const counter$ = interval(1000);
const abortClick$ = fromEvent(abort, 'click');

counter$.pipe( 
    mapTo(-1), //odpowiada za zmniejszanie wartości
    scan((accumulator, current) => {
        return accumulator + current;
    }, 10),
    takeWhile(value => value >= 0),
    takeUntil(abortClick$)
).subscribe(value => {
    countdown.innerHTML = value;
    if(!value){
        message.innerHTML = 'Liftoff!';
    }
})
