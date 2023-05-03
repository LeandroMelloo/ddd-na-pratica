import User from "../../src/domain/entity/User";

test("Deve criar um usuário", () => {
  const user = new User(
    "Leandro Mello",
    "leandromello@gmail.com",
    "12345678",
    37
  );
  expect(user.name).toBe("Leandro Mello");
  expect(user.email).toBe("leandromello@gmail.com");
  expect(user.password).toBe("12345678");
  expect(user.age).toBe(37);
});

test("Não deve criar um usuário com o nome inválido", () => {
  expect(
    () => new User("Leandro", "leandromello@gmail.com", "12345678", 37)
  ).toThrow(new Error("Invalid name"));
});

test("Não deve criar um usuário com o email inválido", () => {
  expect(
    () => new User("Leandro Mello", "leandromello@gmail", "12345678", 37)
  ).toThrow(new Error("Invalid email"));
});

test("Não deve criar um usuário com o password inválido", () => {
  expect(
    () => new User("Leandro Mello", "leandromello@gmail.com", "123456", 37)
  ).toThrow(new Error("Invalid password"));
});

test("Não deve criar um usuário com a idade inválida", () => {
  expect(
    () => new User("Leandro Mello", "leandromello@gmail.com", "12345678", 17)
  ).toThrow(new Error("Invalid age"));
});
