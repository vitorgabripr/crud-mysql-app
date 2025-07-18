import { IsString, IsInt, Min, Max, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsString({ message: "Name must be a string" })
  @IsNotEmpty({ message: "Name should not be empty" })
  readonly name: string;

  @IsInt({ message: "Age must be an integer" })
  @Min(0, { message: "Age must be a positive integer" })
  @Max(100, { message: "Age must be less than or equal to 100" })
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// i'll use this DTO in the controller
// this is a simple DTO for creating a user
