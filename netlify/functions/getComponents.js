// netlify/functions/getComponents.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    // Adjust the path based on your project structure.
    // For example, if your structure is:
    // - netlify/
    //   - functions/
    //     - getComponents.js
    // - components/
    //   - header.html
    //   - hero.html
    //   - footer.html
    const componentsDir = path.resolve(__dirname, '../../components');
    const files = fs.readdirSync(componentsDir);
    
    // Filter and map the files (only .html files)
    const components = files
      .filter(file => file.endsWith('.html'))
      .map(file => ({
        name: file.replace('.html', ''), // Use the file name (without extension) as the component name
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
