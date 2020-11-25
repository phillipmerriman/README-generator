const fs = require("fs");
const inquirer = require("inquirer");

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
        choices: [
            "Public Domain",
            "Permissive",
            "LGPL",
            "Copyleft",
            "Proprietary"
        ]
    }

]).then(response => fs.writeFile("README1.md", 
    `#${response.title}

    ##Description
    ${response.description}
    
    ##Table of Contents (Optional)
    If your README is very long, add a table of contents to make it easy for users to find what they need.
    
    ##Installation
    ${response.installation}
    ##Usage
    ${response.usageInfo}
    ##Credits
    List your collaborators, if any, with links to their GitHub profiles.
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    If you followed tutorials, include links to those here as well.
    
    ##License
    ${response.license} 
    
    🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ##Badges
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by shields.io. You may not understand what they all represent now, but you will in time.
    
    ##Contributing
    ${response.contributionGuidelines}   

    ##Tests
    ${response.testInstructions}

    © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.`, 
    
    err => err ? console.error(err) : console.log("hip, hip, horray!")
))