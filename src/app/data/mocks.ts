import { faker } from "@faker-js/faker";
import { Post } from "../types";

function createMockPost(): Post {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(5),
    date: faker.date.recent().toISOString(),
  };
}

export { createMockPost };
