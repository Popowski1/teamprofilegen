const newTeam = team => {
    const generateManager = manager => {
        return `<div class="card employee-card">
        <div class="card-header text-white">
            <p class="card-title">${manager.getName()}</p>
            <p class="card-title"><i class="fas fa"></i>${manager.getRole()}</p>
            </div>
            <div class ="card-body">
            <ul class= "list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
            </div>
        </div>
        `;
    };

    
}