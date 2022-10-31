const { Router } = require('express');
const { cats } = require('../cats-data');

module.exports = Router().get('/', (req, res) => {
  const filteredData = [];
  for (const cat of cats) {
    filteredData.push({ id: cat.id, name: cat.name });
  }
  res.json(filteredData);
});
