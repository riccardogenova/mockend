import Axios from 'axios';
import express, { Request, Response } from 'express';

export const routerPhotos = express.Router();

routerPhotos.get('/', async (req: Request, res: Response<Array<TPhoto>>) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/photos');
  const data = response.data as Array<TPhoto>;
  res.json(data);
});

routerPhotos.get('/:id', async (req: Request, res: Response<TPhoto>) => {
  const { id } = req.params;
  const response = await Axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const data = response.data;
  res.json(data);
});
