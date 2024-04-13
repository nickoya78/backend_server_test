import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/protected-route', authenticateToken, (req, res) => {
  res.json({ message: "You've accessed a protected route!" });
});

export default router;
