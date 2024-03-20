"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMAIL_CONFIG = exports.JWT_SECRET = void 0;
exports.JWT_SECRET = process.env.JWT_SECRET || 'Maximus_Lotus_1420';
exports.EMAIL_CONFIG = {
    host: process.env.EMAIL_HOST || 'gmail.com',
    user: process.env.EMAIL_USER || 'oyagha1978@gmail.com',
    pass: process.env.EMAIL_PASS || 'aztg ytzm qxwh hsnx'
};
