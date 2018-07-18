
import Person from "../practice_1/person"
import Klass from "../practice_11/class"

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(name, age);
        this.id = id;
        this.klasses = klasses;
    }

    introduce() {
        if (this.klasses == undefined || this.klasses.length == 0) {
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
        }

        // let ks = "";
        // for(let i in this.klasses) {
        //     if(i != this.klasses.length-1) {
        //         ks += this.klasses[i].number + ', ';
        //     } else {
        //         ks += this.klasses[i].number;
        //     }
        // }
        
        let arr = new Array();
        this.klasses.forEach(element => {
            arr.push(element.number);
        });
        let ks = arr.join(", ");

        return super.introduce() + ` I am a Teacher. I teach Class ` + ks + `.`;
    }

    introduceWith(stu) {
        let res = super.introduce();
        if (this.klass.number === stu.klass.number) {
            res += ` I am a Teacher. I teach ${stu.name}.`;
        } else {
            res += ` I am a Teacher. I don't teach ${stu.name}.`;
        }

        return res;
    }
}

export default Teacher;

