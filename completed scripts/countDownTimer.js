const { interval } = rxjs;
const { scan, mapTo, filter, takeWhile } = rxjs.operators;

const countdown = document.querySelector('#countDown')
const message = document.querySelector('#message')

const counter$ = interval(1000);

counter$.pipe( 
    mapTo(-1), //odpowiada za zmniejszanie wartości
    scan((accumulator, current) => {
        return accumulator + current;
    }, 10),
    takeWhile(value => value >= 0)
).subscribe(value => {
    countdown.innerHTML = value;
    if(!value){
        message.innerHTML = 'Liftoff!';
    }
})
