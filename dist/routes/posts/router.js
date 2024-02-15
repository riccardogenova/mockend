"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerPosts = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
exports.routerPosts = express_1.default.Router();
exports.routerPosts.get('/', async (req, res) => {
    const response = await axios_1.default.get('https://jsonplaceholder.typicode.com/posts');
    const data = response.data;
    res.json(data);
});
exports.routerPosts.get('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = response.data;
    res.json(data);
});
