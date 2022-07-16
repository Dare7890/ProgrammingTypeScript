"use strict";
// Реализуйте небольшую типобезопасную библиотеку для проверки 
// утверждений — is. Начните с типов. По завершении вы должны иметь 
// возможность использовать ее следующим образом:
exports.__esModule = true;
exports.is = void 0;
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
var is = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return values.every(function (value, index) {
        return index + 1 < values.length ? value === values[index + 1] : true;
    });
};
exports.is = is;
