
import Person from "../practice_1/person"

class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(name, age);
        this.id = id;
        this.klass = klass;
    }

    introduce() {
        if(this.klass == undefined) {
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
        } else {
            return super.introduce() + ` I am a Teacher. I teach Class ${this.klass.number}.`;
        }
    }

    introduceWith(stu) {
        let res = super.introduce();
        if(this.klass.number === stu.klass.number)  {
            res += ` I am a Teacher. I teach ${stu.name}.`;
        } else {
            res += ` I am a Teacher. I don't teach ${stu.name}.`;
        }

        return res;
    }
}

export default Teacher;

