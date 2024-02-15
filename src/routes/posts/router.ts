import Axios from 'axios';
import express, { Request, Response } from 'express';
import { TPost } from './declarations';

export const routerPosts = express.Router();

routerPosts.get('/', async (req: Request, res: Response<Array<TPost>>) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
  const data = response.data as Array<TPost>;
  res.json(data);
});

routerPosts.get('/:id', async (req: Request, res: Response<TPost>) => {
  const { id } = req.params;
  const response = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = response.data as TPost;
  res.json(data);
});
