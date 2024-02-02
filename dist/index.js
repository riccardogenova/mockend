"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const express_1 = __importDefault(require("express"));
// import YAML from 'yamljs';
// import swaggerUi from 'swagger-ui-express';
const router_1 = require("./routes/users/router");
const router_2 = __importDefault(require("./routes/posts/router"));
const router_3 = require("./routes/comments/router");
const router_4 = require("./routes/albums/router");
const router_5 = require("./routes/photos/router");
const app = (0, express_1.default)();
const PORT = 8080;
// const swaggerDocument = YAML.load('swagger.yaml');
// swaggerDocument.paths = {
//   ...YAML.load('src/routes/albums/swagger.yaml').paths,
//   ...YAML.load('src/routes/comments/swagger.yaml').paths,
//   ...YAML.load('src/routes/photos/swagger.yaml').paths,
//   ...YAML.load('src/routes/posts/swagger.yaml').paths,
//   ...YAML.load('src/routes/users/swagger.yaml').paths,
// };
app.use('/api/users', router_1.routerUsers);
app.use('/api/posts', router_2.default);
app.use('/api/comments', router_3.routerComments);
app.use('/api/albums', router_4.routerAlbums);
app.use('/api/photos', router_5.routerPhotos);
app.use(express_1.default.json());
// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res) => {
    res.send('<h1>Hello World!<h1>');
});
app.listen(PORT, () => {
    console.log(chalk_1.default.bold.green(`Server run on http://localhost:${PORT}`));
});
