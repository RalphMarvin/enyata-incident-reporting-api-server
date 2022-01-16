const seq = require('sequelize');
const db = require('./../../../configs/db');

const Incident = db.define(
  'incidents',
  {
    id: {
      type: seq.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    client_id: {
      type: seq.INTEGER,
      unique: true,
      allowNull: false,
    },
    incident_desc: {
      type: seq.STRING,
      allowNull: false,
    },
    city: {
      type: seq.STRING,
      allowNull: false,
    },
    country: {
      type: seq.STRING,
      allowNull: true,
    },
    weather_report: {
      type: seq.JSON,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

module.exports = Incident;