import {Controller, Get, Header, Post, Redirect} from "@nestjs/common";
import {HttpCode} from "@nestjs/common";

// create the POST handler
@Controller()
export class CatsController {
    @Post()
    @Header('Cache-Control', 'no-store')
    @HttpCode(204)
    create(): string {
        return 'Cats Created';//essa str n é enviada por causa do  @HttpCode(204)
    }

    @Get('abcd/*')
    @Redirect('http://localhost:3000/', 301)
    findAll(): string {
        return `This action returns all the cats`;// essa str é enviada
    }
}

//@Post()vai lidar com uma requisicao.
//'Cache-Control', 'no-store'. isso n armazena resposta em cache na req POST
//@HttpCode(204), apenas retorna Sucesso, NAO RETORNA DADOS