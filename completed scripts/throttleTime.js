//throttleTime pozwala na pobieranie pierwszej wartości wyemitowanej w podanym odstępie czasowym

const { fromEvent } = rxjs; 
const { throttleTime } = rxjs.operators; 

const click$  = fromEvent(document, 'click'); 
click$.pipe(
    throttleTime(1000) //pokaże pierwsze kliknięcie, i każde wykonane sekundę po pierwszym kliknięciu
).subscribe(console.log)