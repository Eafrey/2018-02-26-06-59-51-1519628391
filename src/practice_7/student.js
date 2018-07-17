
import Person from "../practice_1/person"
import Klass from "../practice_7/class"

class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + ` I am a Student. I am at Class ${this.klass.number}.`;
    }
}

export default Student;
