"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerPhotos = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
exports.routerPhotos = express_1.default.Router();
exports.routerPhotos.get('/', async (req, res) => {
    const response = await axios_1.default.get('https://jsonplaceholder.typicode.com/photos');
    const data = response.data;
    res.json(data);
});
exports.routerPhotos.get('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await axios_1.default.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data = response.data;
    res.json(data);
});
