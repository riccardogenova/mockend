import Axios from 'axios';
import express, { Request, Response } from 'express';

export const routerComments = express.Router();

routerComments.get('/', async (req: Request, res: Response) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/comments');
  const { data } = response;
  res.json(data);
});

routerComments.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await Axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
  const { data } = response;
  res.json(data);
});
