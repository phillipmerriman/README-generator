//require 'fs' module
const fs = require("fs");

//create function to write new readme file from the user responses. Export using module.exports
module.exports = (response) => {

    fs.writeFile("README1.md", 

`# ${response.title}

![md](https://img.shields.io/badge/license-${response.license.replace(/\s/g, '&nbsp;')}-success)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Contributions](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Description
${response.description}


## Installation
${response.installation}

## Usage
${response.usageInfo}

## Credits
${response.credits}

## License
${response.license} 

## Contributing
${response.contributionGuidelines}   

## Tests
${response.testInstructions}

## Questions
If you have additional questions, you can reach me here:\n
${response.email}\n
https://github.com/${response.githubUsername}

© 2020`, 
    
    err => err ? console.error(err) : console.log("hip, hip, horray!")
)}