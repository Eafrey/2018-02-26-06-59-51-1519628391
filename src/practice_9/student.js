
import Person from "../practice_1/person"

class Student extends Person {
    constructor(id, name, age, klass) {
        super(name, age);
        this.id = id;
        this.klass = klass;
        this.isLeader = false;
    }

    introduce() {
        let res = super.introduce() + ` I am a Student.`;
        if(!this.isLeader) {
            return res + ` I am at Class ${this.klass.number}.`;
        } else {
            return res + ` I am Leader of Class ${this.klass.number}.`
        }
    }
}

export default Student;
