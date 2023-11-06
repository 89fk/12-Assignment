import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Ap kis se bat karna pasand karain gay...",
            name: "select",
            choices: ["khud se:Self", "student"],
        });
        if (ans.select == "Khud se:Self") {
            console.log("Hello main Khud say bat kar raha hon");
            console.log("meri tabyiat achi hai");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "Ap ko kis student say bat karni.",
                name: "student",
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}, or mn thik hon`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name}, or mn thik hon.....`);
                console.log(persons.students);
            }
        }
        if (Student.name == "Exit") {
        }
    } while (true);
};
programStart(persons);
