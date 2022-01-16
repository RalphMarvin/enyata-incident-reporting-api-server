const _ = require('lodash');
const IncidentService = require('./../services/incident');
const { validationResult } = require('express-validator');
const WeatherProvider = require('../../../helper/weather');

const IncidentController = {
  /**
   * Creates a new resource.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns
   */
  store: async function (req, res, next) {
    const body = req.body;

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(422).json({ errors: validationErrors.array() });
    }

    try {
      const weatherReport = await WeatherProvider.getWeatherReport(body.city);
      body.weather_report = weatherReport;

      const response = await IncidentService.createIncident(body);
      return res.status(201).json(response);
    }
    catch (e) {
      return res.status(500).json({ error: e });
    }
  },

  /**
   * Displays a listing of all the resources.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns
   */
  all: async function (req, res, next) {
    try {
      const incidents = await IncidentService.getAllIncidents();
      return res.status(200).json(incidents);
    }
    catch (e) {
      return res.status(500).json({ error: e });
    }
  },
};

module.exports = IncidentController;