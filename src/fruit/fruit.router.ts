import express from 'express';
import { FruitController } from './fruit.controller';

export const router = express.Router();
const controller = new FruitController();

router.get('/', controller.getFruitsList);
