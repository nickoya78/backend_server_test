"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post('/register', userController_1.registerUser);
router.post('/login', userController_1.loginUser);
router.get('/protected-route', authMiddleware_1.authenticateToken, (req, res) => {
    res.json({ message: "You've accessed a protected route!" });
});
exports.default = router;
//# sourceMappingURL=userRoutes.js.map