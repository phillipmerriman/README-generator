const fs = require("fs");

module.exports = (response) => {
    
    // var response.license = response.license.replace(/\s/g, '&nbsp;');

    fs.writeFile("README1.md", 

`# ${response.title}

![md](https://img.shields.io/badge/license-${response.license.replace(/\s/g, '&nbsp;')}-success)

## Table of Contents (Optional)

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Contributions](#contributing)
- [Tests](#tests)


## Description
${response.description}


## Installation
${response.installation}

## Usage
${response.usageInfo}

## Credits
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.

## License
${response.license} 

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by shields.io. You may not understand what they all represent now, but you will in time.

## Contributing
${response.contributionGuidelines}   

## Tests
${response.testInstructions}

© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.`, 
    
    err => err ? console.error(err) : console.log("hip, hip, horray!")
)
}