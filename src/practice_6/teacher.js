

import Person from "../practice_1/person"

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        if(this.klass == undefined) {
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
        } else {
            return super.introduce() + ` I am a Teacher. I teach Class ${this.klass}.`;
        }
    }
}

export default Teacher;

