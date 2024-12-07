function Student(stdName,stdAge,stdGrade) {
    this.stdName = stdName;
    this.stdgae = stdAge;
    this.stdGrade = stdGrade
    this.getName = () => {
        return this.stdName
    }
}

class Employee {
    constructor(eId,eName,age) {
        this.empId = eId;
        this.empName = eName;
        this.age = age
    }

    getName = () => {
        return this.empName
    }
}

export {Student,Employee};