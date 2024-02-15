import Axios from 'axios';
import express, { Request, Response } from 'express';
import { TPost } from '../posts/declarations';
import { TProduct } from './declarations';

export const routerProducts = express.Router();

routerProducts.get('/', async (req: Request, res: Response<Array<TProduct>>) => {
  const responsePosts = await Axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = responsePosts.data as Array<TPost>;
  const responsePhotos = await Axios.get('https://jsonplaceholder.typicode.com/photos');
  const photos = responsePhotos.data as Array<TPhoto>;
  const products = posts.map((post, index) => ({
    qty: Math.floor(Math.random() * 100) + 1,
    userId: post.userId,
    title: post.title,
    description: post.body,
    id: post.id,
    price: Math.floor(Math.random() * 100) + 1,
    image: photos[index].url,
    thumbnail: photos[index].thumbnailUrl,
  }));
  res.json(products);
});

routerProducts.get('/:id', async (req: Request, res: Response<TProduct>) => {
  const { id } = req.params;
  const responsePost = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const responsePhoto = await Axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const post = responsePost.data as TPost;
  const photo = responsePhoto.data as TPhoto;
  res.json({
    qty: Math.floor(Math.random() * 100) + 1,
    userId: post.userId,
    title: post.title,
    description: post.body,
    id: post.id,
    price: Math.floor(Math.random() * 100) + 1,
    image: photo.url,
    thumbnail: photo.thumbnailUrl,
  });
});
