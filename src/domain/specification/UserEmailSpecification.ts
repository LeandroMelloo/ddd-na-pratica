import User from "../entity/User";
import { AbstractSpecification } from "./Specification";

export default class UserEmailSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    return !!String(user.email)
    .toLowerCase()
    .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
  }
}
