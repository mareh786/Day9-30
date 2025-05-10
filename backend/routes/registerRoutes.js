import express from 'express';
import { registerVisitor, getVisitorsInside } from '../controllers/registerController.js';

const router = express.Router();

router.post('/', registerVisitor);
router.get('/inside', getVisitorsInside);

export default router;
