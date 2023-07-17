import { Request, Response } from 'express';

interface Fruit {
  id: string,
  name: string,
  type: string,
  price: number,
}

const FRUITS_LIST: Fruit[] = [
  {
    id: '001-beetroot',
    name: 'beetroot',
    type: 'vegetable',
    price: 0.35
  },
  {
    id: '002-carrot',
    name: 'carrot',
    type: 'vegetable',
    price: 0.35
  },
  {
    id: '003-apple',
    name: 'apple',
    type: 'fruit',
    price: 0.35
  },
  {
    id: '004-apricot',
    name: 'apricot',
    type: 'fruit',
    price: 0.35
  },
  {
    id: '005-avocado',
    name: 'avocado',
    type: 'fruit',
    price: 0.35
  },
  {
    id: '006-bananas',
    name: 'bananas',
    type: 'fruit',
    price: 0.35
  },
  {
    id: '007-bell-pepper',
    name: 'bell pepper',
    type: 'vegetable',
    price: 0.35
  },
  {
    id: '008-berry',
    name: 'cherry',
    type: 'fruit',
    price: 0.35
  },
  {
    id: '009-blueberry',
    name: 'blueberry',
    type: 'fruit',
    price: 0.35
  },
  {
    id: '010-eggplant',
    name: 'eggplant',
    type: 'vegetable',
    price: 0.35
  }
];

export class FruitController {
  public getFruitsList(req: Request, res: Response) {
    return res.status(200).json(FRUITS_LIST);
  }
}
