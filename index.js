const inquirer = require('inquirer');
const generateProjects = require('./src/page-template')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let employeeArray = [];
const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(Team);
const { writeFile, copyFile } = require('./src/generate-site');

//function to run inquirer for Employee questions
//code snippets from portfolio-generator. names will need to be changed
//ex promptProject, portfolioData, projects etc

class Team {
  constructor() {
    // this.employee = new Employee;
    // this.manager = new Manager;
    // this.engineer = new Engineer;
    // this.intern = new Intern;
    // this.email = Employee.email;
    // this.id = Employee.id;
    // this.officenumber = Employee.officenumber;
    // this.manager = [];
    this.role; 
    this.name;
    this.id;
    this.email;
    
  }

 promptProject = () => {
  console.log(`
  ==================
  Add a new Employee
  ==================
  `);

//if theres no employees array property, create one
  // if (!portfolioData.projects) {
  //     portfolioData.projects = [];
  // }
  this.promptManager();
};

promptManager= () => {
  
  return inquirer.prompt ([

  //MANAGER
      {
          type: 'input',
          name: 'name',
          message: 'What is the name of your manager? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your managers name!');
              return false
            }
          }
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your managers email? (Required)',
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your managers email!');
              return false
            }
          }
        },
        {
          type: 'number',
          name: 'id',
          message: 'What is your managers id? (Required)',
          // validate: idInput => {
          //   if (idInput) {
          //     return true;
          //   } else {
          //     console.log('Please enter your managers id!');
          //     return false
          //   }
          // }
        },
        {
          type: 'number',
          name: 'officenumber',
          message: 'What is your managers office number? (Required)',
          // validate: numberInput => {
          //   if (numberInput) {
          //     return true;
          //   } else {
          //     console.log('Please enter your managers office number!');
          //     return false
          //   }
          // }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: true
        }
  ])

  // .then(({ name }) => {
  //   this.manager = new Employee(name);
  // })
  //   .then(({ email }) => {
  //     this.manager = new Employee(email);
  //   })
  //     .then(({ id }) => {
  //       this.manager = new Employee(id);
  //     })
  //       .then(({ officenumber }) => {
  //         this.manager = new Employee(officenumber);
  //       })


      .then(projectData => {
        var newManager = new Manager(projectData.name, projectData.id,projectData.email,projectData.officenumber)
        console.log(newManager.getRole())

        employeeArray.push(newManager);
          // console.log(projectData);
          console.log(employeeArray);
          if (projectData.confirmAddEmployee) {
              return inquirer.prompt ([
                  {
                      type: 'list',
                      name: 'employeeChoice',
                      message: 'What kind of employee do you want to add?',
                      choices: ['Engineer', 'Intern']
                  }
              ])
              .then((answer => {
           if (answer.employeeChoice === 'Engineer') {
              this.promptEngineer();
          } else if (answer.employeeChoice === 'Intern') {
              this.promptIntern();            
            } 
          
       }));
     } else if (!projectData.confirmAddEmployee){
      var result = generateProjects(employeeArray)
      console.log(result)
     }
  });

};


 promptEngineer() {
  

    return inquirer.prompt ([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your engineer? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your engineers name!');
              return false
            }
          }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your engineers email? (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your engineers email!');
                return false
              }
            }
          },
          {
            type: 'number',
            name: 'id',
            message: 'What is your engineers id? (Required)',
          
          },
          {
              type: 'input',
              name: 'github',
              message: "What is your engineers GitHub name?",
              validate: gitInput => {
                if (gitInput) {
                  return true;
                } else {
                  console.log('Please enter your engineers GitHub!');
                  return false
                }
              }
          },
          {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: true
        }
  ])
      .then(projectData => {
        var newEngineer = new Engineer(projectData.name, projectData.id,projectData.email,projectData.github)
        console.log(newEngineer.getRole())
          employeeArray.push(newEngineer);
          console.log(employeeArray);

          if (projectData.confirmAddEmployee) {
              return inquirer.prompt ([
                  {
                      type: 'list',
                      name: 'employeeChoice',
                      message: 'What kind of employee do you want to add?',
                      choices: ['Engineer', 'Intern']
                  }
              ])
              .then((answer => {
           if (answer.employeeChoice === 'Engineer') {
              this.promptEngineer();
          } else if (answer.employeeChoice === 'Intern') {
              this.promptIntern();            
            } 
          
       }));
     }
  });
    
};

 promptIntern() {
     return inquirer.prompt ([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your intern? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your interns name!');
              return false
            }
          }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your interns email? (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your interns email!');
                return false
              }
            }
          },
          {
            type: 'number',
            name: 'id',
            message: 'What is your interns id? (Required)',
          
          },
          {
              type: 'input',
              name: 'school',
              message: "What is your interns school name?",
              validate: gitInput => {
                if (gitInput) {
                  return true;
                } else {
                  console.log('Please enter your interns school!');
                  return false
                }
              }
          },
          {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: true
        }
  ])
      .then(projectData => {
        var newIntern = new Intern(projectData.name, projectData.id,projectData.email,projectData.school)
        console.log(newIntern.getRole())
        employeeArray.push(newIntern);
        console.log(employeeArray);

          if (projectData.confirmAddEmployee) {
              return inquirer.prompt ([
                  {
                      type: 'list',
                      name: 'employeeChoice',
                      message: 'What kind of employee do you want to add?',
                      choices: ['Engineer', 'Intern']
                  }
              ])
              .then((answer => {
           if (answer.employeeChoice === 'Engineer') {
              this.promptEngineer();
          } else if (answer.employeeChoice === 'Intern') {
              this.promptIntern();            
            } 
          
       }));
     }
  });
    
};
}

new Team().promptProject();


// const pageHTML = generatePage(Team);
// // //writes/creates new HTML in dist folder
// fs.writeFile('./dist/index.html', pageHTML, err => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Page created! Check out index.html in this directory to see it!');
  
//   // //copies style.css and creates file in dist folder      
//   fs.copyFile('./src/style.css', './dist/style.css', err => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('Style sheet copied successfully!');
//   });
// });



// .then(employeeArray => {
//   return generatePage(employeeArray);
// })
// .then(pageHTML => {
//   return writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//   console.log(writeFileResponse);
//   return copyFile();
// })
// .then(copyFileResponse => {
//   console.log(copyFileResponse);
// })
// .catch(err => {
//   console.log(err);
// });

module.exports = Team;
