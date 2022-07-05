import {of, from} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

const numbers$ = of(1, '1', 2, 3, 3, 3, 4, 5, 3);

//wyświetlenie danych z pominięciem powtarzających się wartości występujących po sobie, będących tego samego typu
numbers$.pipe(distinctUntilChanged()).subscribe(console.log);