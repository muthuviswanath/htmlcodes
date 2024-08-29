class Employee{
    constructor(){
        var empid;
        var empname;
        var empsal;
    }

    getEmpid(){
        return this.empid;
    }
    setEmpid(id){
        this.empid = id;
    }

    getEmpname(){
        return this.empname;
    }
    setEmpname(name){
        this.empname = name;
    }

    getEmpsal(){
        return this.empsal;
    }
    setEmpsal(sal){
        if(sal >= 1000000){
            throw new Error("Salary is too high");
        }
        else{
            this.empsal = sal;
        }
    }
}

var emp = new Employee();
emp.setEmpid(101);
emp.setEmpname("John");
emp.setEmpsal(1000000);
console.log(emp.getEmpid());
console.log(emp.getEmpname());
console.log(emp.getEmpsal());