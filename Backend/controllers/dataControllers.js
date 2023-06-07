const fs = require('fs');

const getAllData = (req, res) => {
  fs.readFile('jsondata.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading JSON file' });
    } else {
      try {
        const jsonData = JSON.parse(data);
        res.status(200).json(jsonData);
      } catch (error) {
        res.status(500).json({ error: 'Error parsing JSON data' });
      }
    }
  });
};

module.exports = {
  getAllData,
};
