"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserRegistration = void 0;
const validateUserRegistration = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    // Further validation logic...
    next();
};
exports.validateUserRegistration = validateUserRegistration;
//# sourceMappingURL=userValidation.js.map