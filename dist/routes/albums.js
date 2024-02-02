"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerAlbums = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
exports.routerAlbums = express_1.default.Router();
exports.routerAlbums.get('/', async (req, res) => {
    const response = await axios_1.default.get('https://jsonplaceholder.typicode.com/albums');
    const { data } = response;
    res.json(data);
});
exports.routerAlbums.get('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await axios_1.default.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
    const { data } = response;
    res.json(data);
});
