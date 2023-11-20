import express from 'express';
import { controller } from './art.controller';

const router = express.Router();

router.get('/', controller.GetAll.bind(controller));

export default router;