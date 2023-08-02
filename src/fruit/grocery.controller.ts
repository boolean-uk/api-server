import { Request, Response } from 'express'

interface Grocery {
  id: string
  name: string
  type: 'fruit' | 'vegetable'
  price: number
}

const GROCERIES_LIST: Grocery[] = [
  {
    id: '001-beetroot',
    name: 'beetroot',
    type: 'vegetable',
    price: 0.35,
  },
  {
    id: '002-carrot',
    name: 'carrot',
    type: 'vegetable',
    price: 0.2,
  },
  {
    id: '003-apple',
    name: 'apple',
    type: 'fruit',
    price: 0.23,
  },
  {
    id: '004-apricot',
    name: 'apricot',
    type: 'fruit',
    price: 0.4,
  },
  {
    id: '005-avocado',
    name: 'avocado',
    type: 'fruit',
    price: 1.15,
  },
  {
    id: '006-bananas',
    name: 'bananas',
    type: 'fruit',
    price: 0.3,
  },
  {
    id: '007-bell-pepper',
    name: 'bell pepper',
    type: 'vegetable',
    price: 0.5,
  },
  {
    id: '008-berry',
    name: 'cherry',
    type: 'fruit',
    price: 0.33,
  },
  {
    id: '009-blueberry',
    name: 'blueberry',
    type: 'fruit',
    price: 0.33,
  },
  {
    id: '010-eggplant',
    name: 'eggplant',
    type: 'vegetable',
    price: 0.7,
  },
]

export class GroceryController {
  public getGroceriesList(req: Request, res: Response) {
    const { type } = req.query
    if (!type) {
      return res.status(200).json(GROCERIES_LIST)
    }
    if (type !== 'fruit' && type !== 'vegetable') {
      return res.status(400).json({ error: `invalid type value: "${type}"` })
    }
    const items = GROCERIES_LIST.filter((item) => item.type === type)
    return res.status(200).json(items)
  }
}
