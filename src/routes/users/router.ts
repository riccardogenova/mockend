import Axios from 'axios';
import express, { Request, Response } from 'express';

export const routerUsers = express.Router();

routerUsers.get('/', async (req: Request, res: Response) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
  const { data } = response;
  res.json(data);
});

routerUsers.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  const { data } = response;
  res.json(data);
});
