import { faker } from "@faker-js/faker";
import { Post, User } from "../types";

function createMockPost(): Post {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(5),
    date: faker.date.recent().toISOString(),
  };
}

function createMockUser(): User {
  return {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    avatar: faker.image.avatar(),
  };
}

export { createMockPost, createMockUser };
