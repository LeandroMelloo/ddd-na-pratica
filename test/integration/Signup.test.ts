import Login from "../../src/application/usercase/Login";
import Signup from "../../src/application/usercase/Signup";
import UserRepositoryMemory from "../../src/infra/repository/memory/UserRepositoryMemory";

test("Deve fazer o signup", async () => {
  const userRepository = new UserRepositoryMemory();
  const signup = new Signup(userRepository);
  const inputSignup = {
    name: "Leandro Mello",
    email: "leandromello@gmail.com",
    password: "12345678",
    age: 37,
  };
  await signup.execute(inputSignup);
  const login = new Login(userRepository);
  const inputLogin = {
    email: "leandromello@gmail.com",
    password: "12345678",
  };
  const output = await login.execute(inputLogin);
  expect(output.name).toBe("Leandro Mello");
  expect(output.token).toBe("123456");
});

test("Não deve fazer o signup se o nome for inválido", async () => {
  const userRepository = new UserRepositoryMemory();
  const signup = new Signup(userRepository);
  const inputSignup = {
    name: "Leandro",
    email: "leandromello@gmail.com",
    password: "12345678",
    age: 37,
  };
  expect(() => signup.execute(inputSignup)).rejects.toThrow(
    new Error("Invalid parameter")
  );
});
