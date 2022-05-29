const inquirer = require('inquirer');

const Employee = require('.lib/Employee');
const Manager = require('.lib/Manager');
const Engineer = require('.lib/Engineer');
const Intern = require('.lib/Intern');

const generatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./src/generate-site');
