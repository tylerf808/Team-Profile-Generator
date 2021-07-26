const genBeforeCards = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Team</title>
    </head>
    <body>
        <nav class="bg-danger">
            <h1 class="text-white d-flex justify-content-center py-5">My Team</h1>
        </nav>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <div class="row">`
}

const genCard = (object) => {
    if (object.getRole() === 'Manager') {
        return `<div class="card p-3 m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${object.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          <p class="card-text">ID: ${object.id}</p>
          <a href="mailto: ${object.email}" class="card-link">Email: ${object.email}</a>
          <p class="card-text">Office Number: ${object.officeNumber}</p>
        </div>
      </div>`
    }
    if (object.getRole() === 'Intern') {
        return `<div class="card p-3 m-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${object.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <p class="card-text">ID: ${object.id}</p>
      <a href="mailto: ${object.email}" class="card-link">Email: ${object.email}</a>
      <p class="card-text">School: ${object.school}</p>
    </div>
  </div>`
    }
    return `<div class="card p-3 m-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${object.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <p class="card-text">ID: ${object.id}</p>
      <a href="mailto: ${object.email}" class="card-link">Email: ${object.email}</a>
      <a href="${object.github}" class="card-text">GitHub: ${object.github}</a>
    </div>
  </div>`
}

const genEnd = () => {
   return `</div>
   </div>
    </div>
</body>
</html>`
}

module.exports = {genBeforeCards, genCard, genEnd}