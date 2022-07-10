type People = {
    name: string,
    age: number
}

type Student = People & {
    group: number;
}

let ivan: People = {
    name: 'Ivan',
    age: 22
}
let masha: Student = {
    name: 'Masha',
    age: 25,
    group: 646
}

const getInfo: <T extends People>(people: T) => string = (people) => `Мое имя ${people.name}, мне ${people.age}`;

const peopleInfo = getInfo<People>(ivan);
alert(peopleInfo);

const studentInfo = getInfo<Student>(masha);
alert(studentInfo);

