import { faker } from '@faker-js/faker';
import { CreateContactDto } from '../dto/create-contact.dto';

export const createContact = (): CreateContactDto => {
  const email = faker.internet.email();

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    gender: faker.person.gender(),
    email,
    jobTitle: faker.person.jobTitle(),
    street: faker.location.street(),
    city: faker.location.city(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
    favouriteColour: faker.color.rgb(),
    profileImage: `https://www.gravatar.com/avatar/${email}?s=120&d=identicon`
  };
};

export const createContacts = (length: number): CreateContactDto[] => {
  return Array.from({ length }, createContact);
};
