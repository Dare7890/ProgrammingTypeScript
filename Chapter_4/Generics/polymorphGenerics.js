var ivan = {
    name: 'Ivan',
    age: 22
};
var masha = {
    name: 'Masha',
    age: 25,
    group: 646
};
var getInfo = function (people) { return "\u041C\u043E\u0435 \u0438\u043C\u044F ".concat(people.name, ", \u043C\u043D\u0435 ").concat(people.age); };
var peopleInfo = getInfo(ivan);
alert(peopleInfo);
var studentInfo = getInfo(masha);
alert(studentInfo);
