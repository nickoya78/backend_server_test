"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }
    jsonwebtoken_1.default.verify(token, config_1.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = decoded; // Now you don't need to use 'as any'
        next();
    });
};
exports.authenticateToken = authenticateToken;
