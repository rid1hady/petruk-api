import { Joke, JokeDocument } from "../models/Joke";
import { Request, Response } from "express";

export const getRandomJoke = async (_req: Request, res: Response): Promise<any> => {
  const count = await Joke.countDocuments();
  console.log(count);
  const randomNumber = Math.floor(Math.random() * count);
  console.log(randomNumber);
  const joke = await Joke.findOne().skip(randomNumber);
  console.log(joke);
  return res.send(joke);
};

export const getSpecificJoke = async (req: Request, res: Response): Promise<any> => {
  const { jokeId } = req.params;

  if (!jokeId) {
    return getRandomJoke(req, res);
  }

  try {
    const joke = await Joke.findById(jokeId);
    return res.send(joke);
  } catch (error) {
    return res.send(error);
  }
};

export const submitJoke = async (req: Request, res: Response): Promise<any> => {
  const joke = req.body.joke as JokeDocument;

  try {
    const newJoke = new Joke(joke);
    console.log(JSON.stringify(joke, null, 1));
    await newJoke.save();

    return res.send(newJoke);
  } catch (error) {
    return res.send(error);
  }
};
