type Reserve = {
    (from: Date, to: Date, destination: string): string | undefined
    (from: Date, destination: string): string | undefined
}

let reserve: Reserve = (from: Date, to: Date | string, destination?: string): string | undefined => {
    return to instanceof Date ? `Приезд ${from}, отъезд ${to}` : `Приезд ${from}`;
};

let from = new Date('2022-01-06');
let to = new Date('2022-05-06');
let destination = 'Bali';

// Вызов первой сигнатуры
let firstSignature = reserve(from, to, destination);
alert(firstSignature);

// Вызов второй сигнтуры
let secondSignature = reserve(from, destination);
alert(secondSignature);