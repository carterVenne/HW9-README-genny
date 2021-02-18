function renderLicenseBadge(data) {
    switch (data.license[0]) {
        case 'MIT':
            response = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
            break;
        case 'GNU':
            response = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
            break;
        case 'Apache':
            response = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
            break;
        case 'IBM':
            response = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]';
            break;
        case 'PERL':
            response = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]';
            break;
        case 'EPL':
            response = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]';
            break;   
    }
    return response;
}


function renderLicenseLink(data) {

}

function renderLicenseSection(data) {

}

function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;