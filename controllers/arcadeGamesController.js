const Resource = require('../models/arcadeGame');
const mongoose = require('mongoose');

exports.index = (req, res) => {
  res.render('arcardeGames/index', {
    title: ' Index '
  });
};


exports.show = (req, res) => {
    res.render('arcadeGames/index', {
        title: ' Index '
      });
};


exports.new = (req, res) => {
  res.render('arcadeGames/index', {
    title: ' New '
  });
};


exports.edit = (req, res) => {
  res.render('arcadeGames/index', {
    title: ' Edit '
  });
};


exports.create = async (req, res) => {
  res.render('arcadeGames/index', {
    title: ' Create '
  });
};


exports.update = (req, res) => {
  res.render('arcadeGames/index', {
    title: ' Update '
  });
};


exports.destroy = (req, res) => {
  res.render('arcadeGames/index', {
    title: ' Destroy '
  });
};