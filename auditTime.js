const { fromEvent } = rxjs; 
const { auditTime } = rxjs.operators; 

const click$  = fromEvent(document, 'click'); 
click$.pipe(
    auditTime(4000) //uruchamia się z opóźnieniem równym interwałowi czasu, działa jak sample tylko uruchamia się z opóźnieniem
).subscribe(console.log)