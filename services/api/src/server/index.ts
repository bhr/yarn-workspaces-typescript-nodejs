import express from 'express';
const bodyParser = require('body-parser');
import compression from 'compression';
import { getProjectID } from '@bhirmer/utils';

const app = express();
const DEFAULT_PORT = 3010;
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : DEFAULT_PORT;

app.use(compression());

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('/get-project-id', (req, res, next) => {
  const projectID = getProjectID();
  res.status(200).send(projectID)
});

app.listen(PORT, () => {
  console.info(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
