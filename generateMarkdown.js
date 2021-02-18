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
        default:
            response = '';       
    }
    return response;
}


function renderLicenseLink(data) {
    switch (data.license[0]) {
        case 'MIT' :
            response = '(https://opensource.org/licenses/MIT)';
            break;
        case 'GNU' :
          response = '(https://www.gnu.org/licenses/gpl-3.0)';
          break;
        case 'Apache' :
          response = '(https://opensource.org/licenses/Apache-2.0)';
          break;
        case 'IBM' :
          response = '(https://opensource.org/licenses/IPL-1.0)';
          break;
        case 'PERL' :
          response = '(https://opensource.org/licenses/Artistic-2.0)';
          break;
        default:
          response = '';
    }
      
    return response;
}

function renderLicenseSection(data) {
    let render = `${renderLicenseBadge(data)}${renderLicenseLink}\n`
    return render;
}

function generateMarkdown(data) {
  return `# ${data.name}
  
  ${renderLicenseSection(data)}

  
\n`;
}

module.exports = generateMarkdown;