// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        //when you create a new employee object, will have a property called name and assign it the value of name
        this.name = name;
        this.id = id;
        this.email = email;
        
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;
