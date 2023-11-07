import { Identity } from './identity';

export abstract class UserRepository<T extends Identity, CreateDto, UpdateDto> {
  protected data: T[] = [];
  protected id = 1;

  abstract create(dto: CreateDto): T;

  getAll(): T[] {
    return this.data;
  }

  getById(id: number): T | undefined {
    return this.data.find(item => item.id === id);
  }

  getAllByFilter(property: string, value: any): T[] {
    return this.data.filter((item: any) => item[property] === value);
  }

  update(id: number, dto: UpdateDto): T | undefined {
    const item = this.getById(id);
    if (!item) {
      return item;
    }
    Object.assign(item, dto);
    return item;
  }

  delete(id: number): T | undefined {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) {
      return undefined;
    }
    const item = this.data.splice(index, 1);
    return item[0];
  }
}
