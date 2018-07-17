
import Person from "../practice_1/person"
import Klass from "../practice_11/class"

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(name, age);
        this.id = id;
        this.klasses = klasses;
    }

    introduce() {
        if(this.klasses == undefined || this.klasses.length == 0) {
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
        } else {
            let ks = "";
            for(let i in this.klasses) {
                if(i != this.klasses.length-1) {
                    ks += this.klasses[i].number + ', ';
                } else {
                    ks += this.klasses[i].number;
                }

            }
            return super.introduce() + ` I am a Teacher. I teach Class `+ ks + `.`;
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

    knowLeader(stu) {
        console.log(`I am ${this.name}. I know ${stu.name} become Leader of Class ${this.number}.`);
    }

    knowMember(stu) {
        console.log(`I am ${this.name}. I know ${stu.name} has joined Class ${this.number}.`);
    }
}

export default Teacher;

