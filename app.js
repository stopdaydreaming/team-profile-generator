const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const {
  manager,
  questions,
  questionsManager,
  questionsEngineer,
  questionsIntern
} = require("./lib/questions");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

function askManager() {
  inquirer.prompt(manager).then( response => {
    inquirer.prompt(questionsManager).then(answerM => {
      team.push(
        new Manager(answerM.name, answerM.id, answerM.email, answerM.officeNumber)
      );
      buildTeam();
    });
  });
}

function buildTeam() {
  inquirer.prompt(questions).then(response => {
    if (response.role === "Engineer") {
      inquirer.prompt(questionsEngineer).then(answerE => {
        team.push(
          new Engineer(answerE.name, answerE.id, answerE.email, answerE.github)
        );
        buildTeam();
      });
    } else if (response.role === "Intern") {
      inquirer.prompt(questionsIntern).then(answerI => {
        team.push(
          new Intern(answerI.name, answerI.id, answerI.email, answerI.school)
        );
        buildTeam();
      });
    } else {
      if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
      }
      fs.writeFileSync(outputPath, render(team), "utf-8");
      console.log("Team Page successfully generated! Check the output folder.");
    }
  });
}

askManager();