"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerComments = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
exports.routerComments = express_1.default.Router();
exports.routerComments.get('/', async (req, res) => {
    const response = await axios_1.default.get('https://jsonplaceholder.typicode.com/comments');
    const data = response.data;
    res.json(data);
});
exports.routerComments.get('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await axios_1.default.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const data = response.data;
    res.json(data);
});
