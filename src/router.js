const express = require('express');
const IncidentController = require('./modules/incident/controller/incident');
const { createIncident } = require('./modules/incident/services/validator');

const app = express.Router();

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'welcome to enyata-incident-reporting-api-server ' });
});

/**
 * Incident routes
 */
app.post('/incident', createIncident(), (req, res, next) => {
  return IncidentController.store(req, res, next);
});

app.get('/incidents', (req, res, next) => {
  return IncidentController.all(req, res, next);
});

module.exports = app;