import { Contact } from './models/contact';
import { CreateContactDto } from './dto/create-contact.dto';
import { UserRepository } from '../service/user-repository';
import { createContacts } from './data/create';

export class UserContactRepository extends UserRepository<Contact, CreateContactDto, CreateContactDto> {
  constructor() {
    super();
    this.data = createContacts(15).map((contact, index) => {
      return {
        ...contact,
        id: index + 1
      }
    })
    this.id = this.data.length + 1
  }

  create(dto: CreateContactDto): Contact {
    const contact = {
      ...dto,
      id: this.id++
    };
    this.data.push(contact);
    return contact;
  }
}