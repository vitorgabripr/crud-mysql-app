export class CreateUserDto {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// i'll use this DTO in the controller
// this is a simple DTO for creating a user