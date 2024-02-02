"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Esempio API Documentazione',
            version: '1.0.0',
            description: 'Una semplice API documentata con Swagger',
        },
    },
    apis: ['./src/index.ts'], // Il percorso del file corrente
};
exports.swaggerConfig = (0, swagger_jsdoc_1.default)(swaggerOptions);
