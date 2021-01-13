const questions = [
    // manager questions
    {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "managerId",
        validate: function(value) { 
            let valid = !isNaN(parseFloat(value));
            return valid || "Manager ID must be a number";
        }
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "managerEmail",
        validate: function( value ) {
            var pass = value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
            if (pass) {
                return true;
            } else {
                return "Manager email must be valid";
            }
        }
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber",
        validate: function(value) { 
            let valid = !isNaN(parseFloat(value));
            return valid || "Manager's office must be a number";
        }
    },

    // role choice
    {
        type: "list",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"],
        message: "Which type of team member would you like to add?",
        name: "role"
        // ,when: function( answers ) {
        //     return answers.choices !== "I don't want to add anymore team members";
        // }
    },

    // engineer questions
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is your engineer's ID?",
        name: "engineerId",
        validate: function(value) { 
            let valid = !isNaN(parseFloat(value));
            return valid || "Engineer ID must be a number";
        }
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "engineerEmail",
        validate: function( value ) {
            var pass = value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
            if (pass) {
                return true;
            } else {
                return "Engineer email must be valid";
            }
        }
    },
    {
        type: "input",
        message: "What is your engineer's github?",
        name: "github"
    },
    // intern questions
    {
        type: "input",
        message: "What is your intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "internId",
        validate: function(value) { 
            let valid = !isNaN(parseFloat(value));
            return valid || "Intern ID must be a number";
        }
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "internEmail",
        validate: function( value ) {
            var pass = value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
            if (pass) {
                return true;
            } else {
                return "Intern email must be valid";
            }
        }
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "school"
    }
]

module.exports = questions;