import Axios from 'axios';
import express, { Request, Response } from 'express';
import { TAlbum } from './declarations';

export const routerAlbums = express.Router();

routerAlbums.get('/', async (req: Request, res: Response<Array<TAlbum>>) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/albums');
  const albumList = response.data as Array<TAlbum>;
  res.json(albumList);
});

routerAlbums.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await Axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
  const album = response.data as TAlbum;
  res.json(album);
});
