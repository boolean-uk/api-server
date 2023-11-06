import { faker } from '@faker-js/faker';
import { CreateContactDto } from '../dto/create-contact.dto';

export const createContact = (): CreateContactDto => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    gender: faker.person.gender(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
    street: faker.location.street(),
    city: faker.location.city(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude()
  };
};

export const createContacts = (length: number): CreateContactDto[] => {
  return Array.from({ length }, createContact);
};
