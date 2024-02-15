import Axios from 'axios';
import express, { Request, Response } from 'express';
import { TUser } from './declarations';

export const routerUsers = express.Router();

routerUsers.get('/', async (req: Request, res: Response<Array<TUser>>) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
  const data = response.data as Array<TUser>;
  res.json(data);
});

routerUsers.get('/:id', async (req: Request, res: Response<TUser>) => {
  const { id } = req.params;
  const response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = response.data as TUser;
  res.json(data);
});
