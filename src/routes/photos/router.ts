import Axios from 'axios';
import express, { Request, Response } from 'express';

export const routerPhotos = express.Router();

routerPhotos.get('/', async (req: Request, res: Response) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/photos');
  const { data } = response;
  res.json(data);
});

routerPhotos.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await Axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const { data } = response;
  res.json(data);
});
