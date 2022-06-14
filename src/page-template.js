

 const generateProjects = employeeArray => {
  return `
      <section class="my-3" id="portfolio">
      <div class="flex-row justify-space-between">

      ${employeeArray    
        .map(({ role, name, id, email, officenumber, github, school }) => {
          return `

          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${role}</h3>
            
            <h5 class="portfolio-languages">
              ${name.join}
            </h5>
            <p>${id}</p>
            <p>${email}</p>
            <p>${officenumber}</p>
            <p>${github}</p>
            <p>${school}</p> 
            </div> 
            `;
          })
          .join('')} 
          </div>  
          </section>     
      }
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