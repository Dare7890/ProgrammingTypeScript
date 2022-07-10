var reserve = function (from, to, destination) {
    return to instanceof Date ? "\u041F\u0440\u0438\u0435\u0437\u0434 ".concat(from, ", \u043E\u0442\u044A\u0435\u0437\u0434 ").concat(to) : "\u041F\u0440\u0438\u0435\u0437\u0434 ".concat(from);
};
var from = new Date('2022-01-06');
var to = new Date('2022-05-06');
var destination = 'Bali';
// Вызов первой сигнатуры
var firstSignature = reserve(from, to, destination);
alert(firstSignature);
// Вызов второй сигнтуры
var secondSignature = reserve(from, destination);
alert(secondSignature);
