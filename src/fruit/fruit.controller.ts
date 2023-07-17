import { Request, Response } from 'express'

interface Fruit {
  name: string,
}

const FRUITS_LIST: Fruit[] = [
  { name: 'Pear' },
  { name: 'Apple' },
];


export class FruitController {
  public getFruitsList(req: Request, res: Response) {
    return res.status(200).json(FRUITS_LIST);
  }
}
