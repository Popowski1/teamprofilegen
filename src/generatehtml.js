const newGenTeam = team => {
    const generateManager = manager => {
        return `<div class="card employee-card">
        <div class="card-header text-white">
            <p class="card-title">${manager.getName()}</p>
            <p class="card-title"><i class="fas fa"></i>${manager.getRole()}</p>
            </div>
            <div class ="card-body">
            <ul class= "list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
            </div>
        </div>
        `;
    };
    const generateEngineer = engineer => {
        return `<div class="card employee-card">
        <div class="card-header text-white">
            <p class="card-title">${engineer.getName()}</p>
            <p class="card-title"><i class="fas fa"></i>${engineer.getRole()}</p>
            </div>
            <div class ="card-body">
            <ul class= "list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email:${engineer.getEmail()}</li>
            <li class="list-group-item">Github: ${engineer.getGithub()}</li>
            </ul>
            </div>
        </div>

        `;
    };
    const generateIntern = intern => {
        return `<div class="card employee-card">
        <div class="card-header text-white">
            <p class="card-title">${intern.getName()}</p>
            <p class="card-title"><i class="fas fa"></i>${intern.getRole()}</p>
            </div>
            <div class ="card-body">
            <ul class= "list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
            </div>
        </div>
        `;
    };

const html = [];
html.push(team
    .filter(employee => employee.getRole() === "Manager")
.map(manager =>generateManager(manager))
);
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
.map(engineer => generateEngineer(engineer))
    .join("")
);
html.push(team
    .filter(employee => employee.getRole() === "Intern")
.map(intern => generateIntern(intern))
    .join("")
);
return html.join("");
    
}
module.exports = team =>{
return ` <meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<title>Team</title>
<link rel="stylesheet" href="style.css">

</head>
<body>
<div>My team</div>
<div> ${newGenTeam(team)}</div>

</body>
</html>`;

};