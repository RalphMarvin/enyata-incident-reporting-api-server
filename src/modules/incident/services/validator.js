const { check } = require('express-validator');

exports.createIncident = () => {
  return [
    check('client_id', 'client_id is required').isInt().exists(),
    check('incident_desc', 'incident_desc is required').isString().exists(),
    check('city', 'city is required').isString().exists(),
    check('country', 'country is required').isString().exists(),
  ]
};