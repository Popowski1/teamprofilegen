const genHTML = require ('./src/generatehtml');
const fs = require ('fs');
const inquirer = require('inquirer');





const arrayMembers = []

managePrompt = () => {
    return inquirer.prompt([


{
    type: 'input',
    message :'name?',
    name:'name'


},
{
    type: 'input',
    message :' id?',
    name:'empId'

},
{
    type: 'input',
    message :' email?',
    name:'email'

},
{
    type: 'input',
    message :' office number?',
    name:'officeNum'

}
]).then(managerData => {

        const {name, empId, email, officeNum} = managerData;
        const manager = new Manager (name, empId, email, officeNum);
        arrayMembers.push(manager);
        

}) 
}





employeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message :'engineer or intern?',
            name:'empRoll',
            choices: ['intern', 'engineer']
        
        },
        {
            type: 'input',
            message :'name?',
            name:'name'
            
            
        
        },
        {
            type: 'input',
            message :'id?',
            name:'empId'
            
        
        },
        {
            type: 'input',
            message :'email ?',
            name:'empEmail'
        
        
        },
        {
            type: 'input',
            message :'github',
            name:'empGit'
        
        
        },
        {
            type: 'input',
            message :'school ?',
            name:'empSchool'
        
        
        },
        {
            type: 'confirm',
            message :'would u like to add a team member ?',
            name:'empExtra'
        
        
        }
    ]).then(employeeData => {
        var employee;
        const {name, empId, empEmail,empGit, empSchool, empExtra} = employeeData;
        
        if(empRoll  === 'intern') {
            employee = new Engineer (name, empId,empEmail,empGit);
                
        } else {
            employee = new Intern (name, empId,empEmail,empSchool);
        }
        arrayMembers.push(employee);
        
        if(empExtra) {
            return employeePrompt()
        } else {
            return arrayMembers()
        }
        
}) 
}
const writeFile = data => {
    fs.filewrite('./dist/index.html', data, null, (err) => {
        err ? console.error(err) : console.log("Your team profile generated");
    })
}
managePrompt()
    .then(employeePrompt)
    .then (arrayMembers => {
        return genHTML(arrayMembers)
    })
    .then (indexHTML =>  {
        return writeFile(indexHTML);
    })






