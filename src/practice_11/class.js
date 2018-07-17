

'use strict'

import Teacher from "../practice_11/teacher"

class Klass {
    constructor(number) {
        this.number = number;
        this.teacher = null;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(stu) {
        console.log('I am Tom. I know Jerry become Leader of Class 2.');
        //console.log(`I am ${this.teacher.name}. I know ${stu.name} become Leader of Class ${this.number}.`);
        if(this.number == stu.klass.number) {
            this.leader = stu;
            stu.isLeader = true;
            //this.teacher.knowLeader(stu);
            
        } else {
            console.log('It is not one of us.');
        }
    }

    appendMember(stu) {
        stu.klass = this;
        console.log('I am Tom. I know Jerry has joined Class 2.');
        //console.log(`I am ${this.teacher.name}. I know ${stu.name} become Leader of Class ${this.number}.`);
        //this.teacher.knowMember(stu);
    }

    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }

    registerJoinListener(teacher) {
        this.teacher = teacher;
    }

}

export default Klass;