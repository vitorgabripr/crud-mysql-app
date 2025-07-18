import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ControllerController } from "./controller/controller.controller";
import { CatsController } from "./controller/cats.controller";
@Module({
  imports: [],
  controllers: [AppController, ControllerController, CatsController],
  providers: [AppService],
})
export class AppModule {}
