"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = require("../config/config");
const sendVerificationEmail = (email, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer_1.default.createTransport({
            host: config_1.EMAIL_CONFIG.host,
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: config_1.EMAIL_CONFIG.user,
                pass: config_1.EMAIL_CONFIG.pass,
            },
        });
        const mailOptions = {
            from: config_1.EMAIL_CONFIG.user,
            to: email,
            subject: 'Email Verification',
            html: `<p>Please verify your email by clicking <a href="http://localhost:3000/verify-email?token=${token}">here</a>.</p>`
        };
        yield transporter.sendMail(mailOptions);
    }
    catch (error) {
        console.error('Error sending verification email:', error);
        throw error; // Or handle it as per your application's error handling strategy
    }
});
exports.sendVerificationEmail = sendVerificationEmail;
//# sourceMappingURL=emailService.js.map