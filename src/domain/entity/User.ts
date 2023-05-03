export default class User {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly age: number
  ) {
    if (name.split(" ").length < 2) {
      throw new Error("Invalid name");
    }

    if (
      !String(email)
        .toLowerCase()
        .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    ) {
      throw new Error("Invalid email");
    }

    if (password.length < 8) {
      throw new Error("Invalid password");
    }

    if (age < 18) {
      throw new Error("Invalid age");
    }
  }
}
