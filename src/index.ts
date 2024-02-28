import chalk from 'chalk';
import express, { Request, Response } from 'express';
import cors from 'cors';

import { routerUsers } from './routes/users/router';
import { routerPosts } from './routes/posts/router';
import { routerComments } from './routes/comments/router';
import { routerAlbums } from './routes/albums/router';
import { routerPhotos } from './routes/photos/router';
import { routerProducts } from './routes/products/router';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: '*',
    methods: 'GET',
    optionsSuccessStatus: 200,
  }),
);
app.use(express.json());
app.use(express.static('public'));

app.use('/api/users', routerUsers);
app.use('/api/posts', routerPosts);
app.use('/api/comments', routerComments);
app.use('/api/albums', routerAlbums);
app.use('/api/photos', routerPhotos);
app.use('/api/products', routerProducts);

app.get('/', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/template/index.html');
});

app.listen(PORT, () => {
  console.log(chalk.bold.green(`Server run on http://localhost:${PORT}`));
});
