import { from, interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators'

const numbers = [1,2,3,4,5];

const totalReducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
};

// from(numbers).pipe(reduce(totalReducer, 0)).subscribe(console.log)

interval(1000).pipe(
    take(numbers.length + 1), //pozwala określić maksymalną liczbę operacji (interwałów) i zatrzymuje działanie
    reduce(totalReducer, 0)
).subscribe({
    next: (data) => console.log(data),
    complete: () => console.log("complete!")
} 
)
