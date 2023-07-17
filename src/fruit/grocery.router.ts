import express from 'express';
import { GroceryController } from './grocery.controller';

export const router = express.Router();
const controller = new GroceryController();

router.get('/', controller.getGroceriesList);
