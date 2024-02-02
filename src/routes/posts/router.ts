import Axios from 'axios';
import express, { Request, Response } from 'express';

export const routerPosts = express.Router();

routerPosts.get('/', async (req: Request, res: Response) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = response;
  res.json(data);
});

routerPosts.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const { data } = response;
  res.json(data);
});

export default routerPosts;
