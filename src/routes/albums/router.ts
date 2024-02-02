import Axios from 'axios';
import express, { Request, Response } from 'express';

export const routerAlbums = express.Router();

routerAlbums.get('/', async (req: Request, res: Response) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/albums');
  const { data } = response;
  res.json(data);
});

routerAlbums.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await Axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
  const { data } = response;
  res.json(data);
});
