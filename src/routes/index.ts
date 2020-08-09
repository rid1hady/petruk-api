import * as express from 'express';
import apiRoutes from './api';

const router = express.Router();

router.get('/', (_req, res) => {
  return res.send('Hello World');
});

router.use('/api', apiRoutes);

router.use((_req, res) => {
  return res.status(404).send();
});

export = router;
