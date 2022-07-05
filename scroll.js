const { fromEvent } = rxjs; 
const { map } = rxjs.operators; 

//helpers

function calculateScrollPercent(element){
    const {scrollTop, scrollHeight, clientHeight} = element; 

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//progressbar
const progressBar = document.querySelector('.progressBar');

const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
    //percent progress
    map(({target}) => calculateScrollPercent(
        target.documentElement
    ))
);

progress$.subscribe(percent => {progressBar.style.width = `${percent}%`;})