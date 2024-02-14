import chalk from 'chalk';
import express, { Request, Response } from 'express';
import YAML from 'yamljs';

import swaggerUi from 'swagger-ui-express';
import { routerUsers } from './routes/users/router';
import routerPosts from './routes/posts/router';
import { routerComments } from './routes/comments/router';
import { routerAlbums } from './routes/albums/router';
import { routerPhotos } from './routes/photos/router';

const app = express();
const PORT = process.env.PORT || 3000;

const swaggerDocument = YAML.load('swagger.yaml');

swaggerDocument.paths = {
  ...YAML.load('src/routes/albums/swagger.yaml').paths,
  ...YAML.load('src/routes/comments/swagger.yaml').paths,
  ...YAML.load('src/routes/photos/swagger.yaml').paths,
  ...YAML.load('src/routes/posts/swagger.yaml').paths,
  ...YAML.load('src/routes/users/swagger.yaml').paths,
};

app.use('/api/users', routerUsers);
app.use('/api/posts', routerPosts);
app.use('/api/comments', routerComments);
app.use('/api/albums', routerAlbums);
app.use('/api/photos', routerPhotos);

app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello World!<h1>');
});

app.listen(PORT, () => {
  console.log(chalk.bold.green(`Server run on http://localhost:${PORT}`));
});
