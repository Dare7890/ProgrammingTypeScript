function show<T>(a: T, b: T, showInfo: (a: T, b: T) => void) {
    showInfo(a, b);
}

let a = 5;
let b = 10;
let showSum = show<number>(a, b, console.log);

let c = 'firstString';
let d = 'secondString';
let showLines = show<string>(c, d, alert);