const { faker } = require('@faker-js/faker');

faker.setLocale('pt_BR');

function createRandomUser() {
  return {
    id: faker.helpers.unique(faker.datatype.number),
    name: faker.name.fullName(),
    likes: faker.random.numeric()
  }
}

module.exports = () => {
  const data = {
    friends: []
  }

  for (let index = 0; index < 500; index++) {
    data.friends.push(createRandomUser());
  }

  return data;
}