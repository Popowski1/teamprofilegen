const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const fs = require ('fs');
const inquirer = require('inquirer');
const newGenTeam = require('./src/generatehtml.js')










const teamArray = []

function loadAll () {
    function newTeam () {
        inquirer.prompt([{
            type: "list",
            message: "What type of employee?",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern","end"]

        }]).then (function (userInput) {
            switch(userInput.addEmployeePrompt) {
                case "Manager":
                addManager();
                    break;
                    case "Engineer":
                        addEngineer();
                        break;
                        case "Intern":
                            addIntern();
                            break;
                            case "End":
                            addIntern();
                            break;
                            default:
                                htmlBuilder();
            }
        })
    }
    
function addManager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "manager name ?"
      },
      {
        type: "input",
        name: "managerId",
        message: "id number ?"
      },
      {
        type: "input",
        name: "managerEmail",
        message: "email address ?"
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "office number ?"
      }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        newTeam();
    });


}

function addEngineer() {
    inquirer.prompt ([
      
        {
          type: "input",
          name: "engineerName",
          message: "engineer name ?"
        },
        {
          type: "input",
          name: "engineerId",
          message: "id number ?"
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "email address ?"
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Github ?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        newTeam();
    });
}
function addIntern() {
    inquirer.prompt ([
      
        {
          type: "input",
          name: "internName",
          message: "intern name ?"
        },
        {
          type: "input",
          name: "internId",
          message: "id number ?"
        },
        {
          type: "input",
          name: "internEmail",
          message: "email address ?"
        },
        {
          type: "input",
          name: "internSchool",
          message: "school ?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        newTeam();
});
}


function htmlBuilder () {
    console.log("Team made")
    fs.writeFileSync("./dist/team.html", newGenTeam(teamArray), "UTF-8")
}
newTeam();
}
loadAll();
