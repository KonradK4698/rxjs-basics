var { of, range, from } = rxjs;

function* hello() { //utworzenie funkcji będącej iteratorem
    yield 'Hello';
    yield ' World';
}

const iterator = hello();

const observer = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete!')
}

const source$ = of(1,2,3,4,5);
const source2$ = range(1,5);
const sourceFrom$ = from('Hello');
const sourceIterator$ = from(iterator);

// source$.subscribe(observer);
// sourceFrom$.subscribe(observer);
sourceIterator$.subscribe(observer);

