const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    // Join the current working directory with "components"
    const componentsDir = path.join(process.cwd(), 'components');

    // Optional: Check if the directory exists (helps debug on Netlify)
    if (!fs.existsSync(componentsDir)) {
      throw new Error('Components directory not found: ' + componentsDir);
    }

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
