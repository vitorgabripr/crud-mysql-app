import {Body, Controller, Get, Header, Post, Redirect} from "@nestjs/common";
import {HttpCode} from "@nestjs/common";
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
@Controller('users')
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

    @Get() //get all users
    findAllUsers(): CreateUser[] {
        return users; //return all users
    }

    // Your existing CatsController methods would go into CatsController
    // If you rename CatsController to UsersController, make sure to adjust
    // other methods or separate concerns into different controllers.   
    @Get('abcd/*') 
    @Redirect('http://localhost:3000/', 301)
    findAll(): string {
        return `This action returns all the cats`;// essa str é enviada
    }
}

//@Post()vai lidar com uma requisicao.
//'Cache-Control', 'no-store'. isso n armazena resposta em cache na req POST
//@HttpCode(204), apenas retorna Sucesso, NAO RETORNA DADOS