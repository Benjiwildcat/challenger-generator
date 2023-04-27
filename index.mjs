import inquirer from "inquirer"
import fs from "fs/promises"
import { writeFile } from "fs";


let { title, description, the_process, github, license } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the title of your README?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Provide a brief description of your project",
        },
        {
            type: 'input',
            name: 'the_process',
            message: "What were your thoughts while working on the project?",
        },
        {
            type: 'input',
            name: 'github',
            message: 'github account details',
        },
        {
            type: 'list',
            name: 'license',
            message: "What license do you want?",
            choices: ['Boost', 'Apache', 'MIT'],
            // filter(val) {
            //     return val.toLowerCase();
            // },
        },
    ])


console.log({ title, description, the_process, github, license });

let readmeText =

    `# Title
${title}


# Project description

${description}


## the process

${the_process}


## github

${github}


## license

${generateLicense(license)}
`

fs.writeFile("README.md", readmeText);



function generateLicense() {


    if (license === 'Apache') {

        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }


    else if (license === 'Boost') {

        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }

    else if (license === 'MIT') {

        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }

}