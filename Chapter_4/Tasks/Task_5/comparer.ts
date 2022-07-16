// Реализуйте небольшую типобезопасную библиотеку для проверки 
// утверждений — is. Начните с типов. По завершении вы должны иметь 
// возможность использовать ее следующим образом:

// Сравнить string и string
// is('string', 'otherstring') // false

// Сравнить boolean и boolean
// is(true, false) // false

// Сравнить number и number
// is(42, 42) // true

// Сравнение двух различных типов должно выдавать ошибку 
// при компиляции
// is(10, 'foo') // Ошибка TS2345: аргумент типа '"foo"' не может
// быть присвоен параметру типа 'number'.
export const is: <T>(...values: T[]) => boolean = <T>(...values: T[]): boolean => {
    return values.every((value, index) =>
        index + 1 < values.length ? value === values[index + 1] : true
    );
}