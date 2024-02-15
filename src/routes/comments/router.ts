import Axios from 'axios';
import express, { Request, Response } from 'express';
import { TComment } from './declarations';

export const routerComments = express.Router();

routerComments.get('/', async (req: Request, res: Response<Array<TComment>>) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/comments');
  const data = response.data as Array<TComment>;
  res.json(data);
});

routerComments.get('/:id', async (req: Request, res: Response<TComment>) => {
  const { id } = req.params;
  const response = await Axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
  const data = response.data as TComment;
  res.json(data);
});
