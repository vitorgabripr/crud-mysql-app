// test/app.e2e-spec.ts
import { Test, TestingModule } from "@nestjs/testing"; //
import { INestApplication } from "@nestjs/common"; //
import * as request from "supertest"; //
import { App } from "supertest/types"; //
import { AppModule } from "./../src/app.module"; //
import { ValidationPipe } from "@nestjs/common"; //

describe("AppController (e2e)", () => {
  //
  let app: INestApplication<App>; //
  let userId: number; // Variável para armazenar o ID do usuário criado para testes

  beforeEach(async () => {
    //
    const moduleFixture: TestingModule = await Test.createTestingModule({
      //
      imports: [AppModule], //
    }).compile(); //

    app = moduleFixture.createNestApplication(); //
    app.useGlobalPipes(new ValidationPipe()); //
    await app.init(); //
  });

  afterAll(async () => {
    // Novo bloco para fechar a aplicação
    await app.close();
  });

  it("/ (GET)", () => {
    //
    return request(app.getHttpServer()) //
      .get("/") //
      .expect(200) //
      .expect("Hello World!"); // Correção da expectativa
  });

  it("/users (POST) should create a user", () => {
    //
    return request(app.getHttpServer()) //
      .post("/users") //
      .send({ name: "Test User", age: 25 }) //
      .expect(201) //
      .then((response) => {
        //
        expect(response.body).toHaveProperty("id"); //
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.name).toEqual("Test User"); //
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.age).toEqual(25); //
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        userId = response.body.id; //
      });
  });

  it("/users (POST) should return 400 for invalid data", () => {
    //
    return request(app.getHttpServer()) //
      .post("/users") //
      .send({ name: "", age: -1 }) //
      .expect(400) //
      .expect((response) => {
        //
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.message).toEqual(
          expect.arrayContaining([
            //
            "Name should not be empty", //
            "Age must be a positive number", //
          ]),
        );
      });
  });

  it("/users (GET) should return all users", () => {
    //
    return request(app.getHttpServer()) //
      .get("/users") //
      .expect(200) //
      .expect((response) => {
        //
        expect(response.body).toBeInstanceOf(Array); //
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.length).toBeGreaterThanOrEqual(1); //
        expect(response.body).toContainEqual(
          expect.objectContaining({
            //
            id: userId, //
            name: "Test User", //
            age: 25, //
          }),
        );
      });
  });

  it("/users/:id (GET) should return a user by ID", () => {
    //
    return request(app.getHttpServer()) //
      .get(`/users/${userId}`) //
      .expect(200) //
      .expect((response) => {
        //
        expect(response.body).toHaveProperty("id", userId); //
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.name).toEqual("Test User"); //
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.age).toEqual(25); // Correção da expectativa de idade
      });
  });

  it("/users/:id (GET) should return 404 for a non-existent user", () => {
    //
    return request(app.getHttpServer()) //
      .get("/users/9999") //
      .expect(404); //
  });

  it("/users/:id (PUT) should update a user", () => {
    //
    return request(app.getHttpServer()) //
      .put(`/users/${userId}`) //
      .send({ name: "Updated User", age: 35 }) //
      .expect(200) //
      .expect((response) => {
        //
        expect(response.body).toHaveProperty("id", userId); //
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.name).toEqual("Updated User"); //
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.age).toEqual(35); //
      });
  });

  it("/users/:id (PUT) should return 404 for updating a non-existent user", () => {
    //
    return request(app.getHttpServer()) //
      .put("/users/9999") //
      .send({ name: "Non Existent", age: 100 }) //
      .expect(404); //
  });

  it("/users/:id (DELETE) should delete a user", () => {
    //
    return request(app.getHttpServer()) //
      .delete(`/users/${userId}`) //
      .expect(204); //
  });

  it("/users/:id (DELETE) should return 404 for deleting a non-existent user", () => {
    //
    return request(app.getHttpServer()) //
      .delete("/users/9999") //
      .expect(404); //
  });
});
