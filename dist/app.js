"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));
app.use(express_1.default.json());
// Add a route for /
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.use('/api/users', userRoutes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});
exports.default = app;
// import express from 'express';
// import cors from 'cors';
// import userRoutes from './routes/userRoutes';
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.get('/', (req, res) => {
//     res.send('Hello, world!');
//   });
// app.use('/api/users', userRoutes);
// export default app;
