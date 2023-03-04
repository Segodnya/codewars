class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

const students = [andy, stephen, eric, david, phil, cam, geoff];

console.log(mostMoney(students));

function mostMoney(students) {
  const currentLeader = { name: null, total: 0 };
  const leaders = [];
  students.forEach((student) => {
    student.total = student.fives * 5 + student.tens * 10 + student.twenties * 20;
    if (student.total >= currentLeader.total) {
      currentLeader.name = student.name;
      currentLeader.total = student.total;
    }
  });
  students.forEach((student) => {
    if (student.total === currentLeader.total) {
      leaders.push(student.name);
    }
  });
  if (leaders.length === students.length && students.length !== 1) {
    return "all";
  } else {
    return currentLeader.name;
  }
}
