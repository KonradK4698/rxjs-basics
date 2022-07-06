const { fromEvent, asyncScheduler } = rxjs; 
const { map, tap, throttleTime } = rxjs.operators; 

//helpers

function calculateScrollPercent(element){
    const {scrollTop, scrollHeight, clientHeight} = element; 
    console.log({scrollTop, scrollHeight, clientHeight})

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//progressbar
const progressBar = document.querySelector('.progressBar');

const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
    throttleTime(30, asyncScheduler, {
        leading: false, 
        trailing: true
    }),
    //percent progress
    map(({target}) => calculateScrollPercent(
        target.documentElement
    )),
    tap(console.log)
);

progress$.subscribe(percent => {progressBar.style.width = `${percent}%`;})