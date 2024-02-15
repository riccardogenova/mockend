"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUsers = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
exports.routerUsers = express_1.default.Router();
exports.routerUsers.get('/', async (req, res) => {
    const response = await axios_1.default.get('https://jsonplaceholder.typicode.com/users');
    const data = response.data;
    res.json(data);
});
exports.routerUsers.get('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await axios_1.default.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = response.data;
    res.json(data);
});
