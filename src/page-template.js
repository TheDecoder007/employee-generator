const generateDiv = (employee) => {
  // switch case function
  switch (employee.getRole()){
  case "Manager": 
    return `<div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${employee.getRole()}</h3>
            
            <h5 class="portfolio-languages">
              ${employee.name}
            </h5>
            <p>${employee.id}</p>
            <p>${employee.email}</p>
            <p>${employee.officenumber}</p>

            </div> `
    break;
    case "Engineer": 
    return `<div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${employee.getRole()}</h3>
            
            <h5 class="portfolio-languages">
              ${employee.name}
            </h5>
            <p>${employee.id}</p>
            <p>${employee.email}</p>
            <p>${employee.github}</p>

            </div> `
    break;
    case "Intern": 
    return `<div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${employee.getRole()}</h3>
            
            <h5 class="portfolio-languages">
              ${employee.name}
            </h5>
            <p>${employee.id}</p>
            <p>${employee.email}</p>
            <p>${employee.school}</p>
            </div> `
    break;


}
}

 const generateProjects = (employeeArray) => {
  console.log(employeeArray[0].getRole())
  return `
      <section class="my-3" id="portfolio">
      <div class="flex-row justify-space-between">
  if Employee Array for each element if the elemtn.getRole()=== Manager return a Manager div
  if element.getRole()=="Engineer" reutnr an HTMl Div with the engineering needs
      ${employeeArray.forEach( element => generateDiv(element)) }
      ${employeeArray.forEach( Object => generateDiv(Object)) }

          </div>  
          </section>     
      
      `;
    };

    //export function to generate entire page
module.exports = templateData => {
  //destructure page data by section
  const { projects, about, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.role}</h1>
        <nav class="flex-row">
        <h3 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h3>
        

        </nav>
      </div>
    </header>
    <main class="container my-5">
          
          ${generateProjects(projects)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};

module.exports = generateProjects