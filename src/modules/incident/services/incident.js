const _ = require('lodash');
const seq = require('sequelize');
const Incident = require('./../models/incident');

const IncidentService = {
  createIncident: async function (data) {
    try {
      const incident = await Incident.create(data);
      return incident;
    }
    catch (e) {
      console.log(e);
      throw new Error(e);
    }
  },

  getAllIncidents: async function () {
    try {
      const incidents = await Incident.findAll({
        attributes: [
          'client_id',
          'incident_desc',
          'city',
          'country',
          'weather_report',
          [seq.literal('created_at'), 'date'],
        ],
      });

      return incidents;
    }
    catch (e) {
      throw new Error(e);
    }
  }
};

module.exports = IncidentService;