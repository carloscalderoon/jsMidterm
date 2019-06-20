// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const resourcesRoutes = require('./routes/resources');
const arcadeGamesRoutes = require('./routes/arcadeGames')

// Our home page
app.get('/', (req, res) => {
  res.render('pages/home');
});
app.use('/resources', resourcesRoutes);
app.use('/arcadeGames', arcadeGamesRoutes);

// Exporting the changes
module.exports = app;