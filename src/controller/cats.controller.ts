import {
  Body,
  Controller,
  Param,
  Get,
  Header,
  NotFoundException,
  Post,
  Redirect,
  Put,
  Delete,
} from "@nestjs/common";
import { HttpCode } from "@nestjs/common";
import { CreateUserDto } from "src/dto/create.user.dto";

//create user
interface CreateUser {
  id: number;
  name: string;
  age: number;
}

let users: CreateUser[] = []; //simple array to store users
let nextId = 1; //simple id generator

// create the POST handler
@Controller("users")
export class CatsController {
  @Post()
  //@Header('Cache-Control', 'no-store')
  @HttpCode(201) // i using 201 for successful resource creation
  create(@Body() CreateUserDto: CreateUserDto): CreateUser {
    const newUser = { id: nextId++, ...CreateUserDto };
    users.push(newUser);
    console.log("User created:", newUser);
    return newUser; //return created user
  }

  //metodo para  atualizar user
  @Put(":id")
  updateUser(
    @Param("id") id: string,
    @Body() CreateUserDto: CreateUserDto,
  ): CreateUser | string {
    const userIndex = users.findIndex((user) => user.id === parseInt(id));
    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const updatedUser = {
      ...users[userIndex],
      ...CreateUserDto,
      id: parseInt(id),
    };
    users[userIndex] = updatedUser;
    console.log("User updated:", updatedUser);
    return updatedUser; //retorna user atualizado
  }

  @Get() //get all users
  findAllUsers(): CreateUser[] {
    return users; //return all users
  }

  @Get(":id") //get user by id
  findUserById(@Param("id") id: string): CreateUser | string {
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user; //return user if found
  }

  //metodo para apagar user pelo seu id
  @Delete(":id")
  @HttpCode(204) //retorna 204 pra falar que foi apagado com sucesso
  deleteUser(@Param("id") id: string): void {
    const lenghtInitial = users.length;
    users = users.filter((user) => user.id !== parseInt(id));

    if (users.length === lenghtInitial) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    console.log(`User with id ${id} deleted`);
  }

  @Get("abcd/*")
  @Redirect("http://localhost:3000/", 301)
  findAll(): string {
    return `This action returns all the cats`; // essa str é enviada
  }
}

//@Post()vai lidar com uma requisicao.
//'Cache-Control', 'no-store'. isso n armazena resposta em cache na req POST
//@HttpCode(204), apenas retorna Sucesso, NAO RETORNA DADOS

// futuramente botar isso:
// // Em src/controller/cats.controller.ts
// // ...
// @Get('search') // Exemplo de busca com query parameters
// findFilteredUsers(@Query('name') name?: string, @Query('age') age?: string): CreateUser[] {
//     let filteredUsers = users;

//     if (name) {
//         filteredUsers = filteredUsers.filter(user => user.name.includes(name));
//     }

//     if (age) {
//         filteredUsers = filteredUsers.filter(user => user.age === parseInt(age));
//     }

//     return filteredUsers;
// } isso serve pra filtrar usuarios por nome ou idade
// // ...
