//require node modules
const inquirer = require("inquirer");
const writeFile = require("./write-file.js");
const licenses = [
    "Apache License 2.0",
    "GNU General Public License v3.0",
    "MIT License",
    "BSD 2-Clause “Simplified” License",
    "BSD 3-Clause “New” or “Revised” License",
    "Boost Software License 1.0",
    "Creative Commons Zero v1.0 Universal",
    "Eclipse Public License 2.0",
    "GNU Affero General Public License v3.0",
    "GNU General Public License v2.0",
    "GNU Lesser General Public License v2.1",
    "Mozilla Public License 2.0",
    "The Unlicense",
    "Public Domain",
    "Permissive",
    "LGPL",
    "Copyleft",
    "Proprietary"
]

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Add a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well."
    },
    {
        type: "input",
        name: "usageInfo",
        message: "Provide instructions and examples for using your application."
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "List rules and guidelines required for contributing to your project."
    },
    {
       type: "input",
       name: "testInstructions",
       message: "Provide examples on how to run tests for your application."
    },
    {
        type: "list",
        name: "license",
        message: "Which license? If you need help choosing a license, use https://choosealicense.com/",
        choices: licenses
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Enter your github username."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email."
    }

]).then(response => writeFile(response));