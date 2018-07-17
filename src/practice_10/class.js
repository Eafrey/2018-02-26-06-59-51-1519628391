

'use strict'

class Klass {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(stu) {
        if(this.number == stu.klass.number) {
            this.leader = stu;
            stu.isLeader = true;
        } else {
            console.log('It is not one of us.');
        }
    }

    appendMember(stu) {
        stu.klass = this;
    }

}

export default Klass;