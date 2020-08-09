import mongoose from 'mongoose';

export type JokeDocument = mongoose.Document & {
  text: string;
  source: string;
  sender: string;
};

const jokeSchema = new mongoose.Schema({
    text: String,
    source: String,
    sender: String
}, {
  timestamps: true
});

export const Joke = mongoose.model<JokeDocument>('Joke', jokeSchema);
