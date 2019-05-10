interface Person {
  name: string;
  age: number;
}

function createPerson(name: string, age: number): Person {
  return {
    name,
    age
  };
}

export { Person, createPerson };
