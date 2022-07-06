//sampleTime pozwala na emitowanie dowolnej wartości występującej w danym odcinku czasu
const { fromEven, interval, fromEvent } = rxjs; 
const { sampleTime, map, sample } = rxjs.operators; 

const click$  = fromEvent(document, 'click'); 
click$.pipe(
    sampleTime(4000), 
    map(({clientX, clientY}) => ({
        clientX, clientY
    }))
).subscribe(console.log)

const timer$ = interval(1000); 

timer$.pipe(
    sample(click$)
).subscribe(console.log)