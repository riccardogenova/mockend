"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerProducts = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
exports.routerProducts = express_1.default.Router();
exports.routerProducts.get('/', async (req, res) => {
    const responsePosts = await axios_1.default.get('https://jsonplaceholder.typicode.com/posts');
    const posts = responsePosts.data;
    const responsePhotos = await axios_1.default.get('https://jsonplaceholder.typicode.com/photos');
    const photos = responsePhotos.data;
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
exports.routerProducts.get('/:id', async (req, res) => {
    const { id } = req.params;
    const responsePost = await axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const responsePhoto = await axios_1.default.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const post = responsePost.data;
    const photo = responsePhoto.data;
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
