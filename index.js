const inquirer = require('inquirer');

// const Employee = require('./lib/Employee');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');

// const generatePage = require('./src/page-template.js');
// const { writeFile, copyFile } = require('./src/generate-site');

//function to run inquirer for Employee questions
//code snippets from portfolio-generator. names will need to be changed
//ex promptProject, portfolioData, projects etc

const promptEngineer = portfolioData => {

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
        }
    ])
};

const promptIntern = portfolioData => {
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
        }
    ])
};



const promptProject = portfolioData => {
    console.log(`
    ==================
    Add a new Employee
    ==================
    `);

//if theres no employees array property, create one
    // if (!portfolioData.projects) {
    //     portfolioData.projects = [];
    // }
//adding "project" to projects array (portfolioData)
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
        .then(projectData => {
            // portfolioData.projects.push(projectData);
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
                promptEngineer();
            } else if (answer.employeeChoice === 'Intern') {
                promptIntern();
            
            
              } else {
                return portfolioData;
            }
                }));
            }
        });

};
promptProject();