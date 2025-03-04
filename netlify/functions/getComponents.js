// netlify/functions/getComponents.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    // Use process.cwd() to get the project root directory
    const componentsDir = path.join(process.cwd(), 'components');
    const files = fs.readdirSync(componentsDir);

    const components = files
      .filter(file => file.endsWith('.html'))
      .map(file => ({
        name: file.replace('.html', ''),
        file: file
      }));

    return {
      statusCode: 200,
      body: JSON.stringify(components)
    };
  } catch (err) {
    console.error('Error reading components directory:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
