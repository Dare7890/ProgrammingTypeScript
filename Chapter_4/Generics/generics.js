function show(a, b, showInfo) {
    showInfo(a, b);
}
var a = 5;
var b = 10;
var showSum = show(a, b, console.log);
var c = 'firstString';
var d = 'secondString';
var showLines = show(c, d, alert);
