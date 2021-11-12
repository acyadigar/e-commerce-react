import 'dotenv/config';
import './mongo-connection.js'
import express from 'express';
import Boom from 'boom';
import cors from 'cors';

import routes from './routes/index.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.use((req, res, next) => {
  return next(Boom.notFound('This route does not exist.'));
});

app.use((err, req, res, next) => {
  console.log(err);

  if (err) {
    if (err.output) {
      return res.status(err.output.statusCode || 500).json(err.output.payload);
    }

    return res.status(500).json(err);
  }
});

app.get('/', (req, res) => {
  res.send('HEY!')
})

export default app
