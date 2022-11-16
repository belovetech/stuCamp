const path = require('path');

module.exports = {
    module: {
     rules: [
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 8192,
              }
            },
          ],
         type: 'javascript/auto'
        },
     ]
    },
  }
