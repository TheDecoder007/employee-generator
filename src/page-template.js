var html = ""
const generateDiv = (anEmployee) => {
  // switch case function
  console.log("At individual employee function")
  console.log(anEmployee.getRole())
  switch (anEmployee){
  case anEmployee.getRole() == "Manager": 
          var result = `<div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">Manager</h3>
            
            <h5 class="portfolio-languages">
              ${anEmployee.name}
            </h5>
            <p>${anEmployee.id}</p>
            <p>${anEmployee.email}</p>
            <p>${anEmployee.officenumber}</p>
            </div> `
            console.log("manager made")
            console.log(result)
    return html += result
    break;
    case anEmployee.getRole() == "Engineer": 
      var result = `<div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${anEmployee.getRole()}</h3>
            
            <h5 class="portfolio-languages">
              ${anEmployee.name}
            </h5>
            <p>${anEmployee.id}</p>
            <p>${anEmployee.email}</p>
            <p>${anEmployee.github}</p>

            </div> `
            return html+= result
    break;
    case anEmployee.getRole() == "Intern": 
    return html+=`<div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${anEmployee.getRole()}</h3>
            
            <h5 class="portfolio-languages">
              ${anEmployee.name}
            </h5>
            <p>${anEmployee.id}</p>
            <p>${anEmployee.email}</p>
            <p>${anEmployee.school}</p>
            </div> `
    break;


}
}


 const generateProjects = async (employeeArray) => {
  console.log("At generate projects function")
  await employeeArray.forEach( element =>  generateDiv(element))
  console.log("html right below")
  console.log(html)
  console.log("Added everything to HTML")
  return `
      <section class="my-3" id="portfolio">
      <div class="flex-row justify-space-between">
      
    

          </div>  
          </section>     
      
      `;
    };

    //export function to generate entire page
module.exports = templateData = async (employeeArray) => {
  response = await employeeArray.forEach( element =>  generateDiv(element))
  console.log(response)
  console.log(html)
  //destructure page data by sectio
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
        <h1 class="page-title text-secondary bg-dark py-2 px-3">$Team</h1>
        <nav class="flex-row">
        <h3 class="page-title text-secondary bg-dark py-2 px-3">$Team</h3>
        </nav>
      </div>
    </header>
    <main class="container my-5">
    <section class="my-3" id="portfolio">
    <div class="flex-row justify-space-between">
    
  
  
    ${html}

        </div>  
        </section>
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Ryan</h3>
    </footer>
  </body>
  </html>
  `;
};