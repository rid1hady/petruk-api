import express from 'express';
import * as JokeController from '../../controllers/joke';

const router = express.Router();

router.get('/', JokeController.getRandomJoke);
router.post('/', JokeController.submitJoke);
router.get('/:jokeId', JokeController.getSpecificJoke);

export = router;
