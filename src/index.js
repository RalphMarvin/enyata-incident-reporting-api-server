require('dotenv').config();
const express = require('express');
const appRouter = require('./router');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(appRouter);

app.listen(port, () => {
  console.log(`enyata-incident-reporting-api-server is running at http://localhost:${port}`);
});

module.exports = app; // for testing