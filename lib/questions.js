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
        name: "managerId"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber"
    },

    // role choice
    {
        type: "list",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"],
        message: "Which type of team member would you like to add?",
        name: "role"
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
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "engineerEmail"
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
        name: "internId"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "school"
    }
]

module.exports = questions;