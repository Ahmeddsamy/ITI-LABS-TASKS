import supertest from "supertest";
import server from "../../index.js";

const request = supertest(server);

//supertest
describe("Test user Routes", () => {
  it("test signup route", async () => {
    const res = await request.post("/user/signup").send({
      userName: "ali",
      age: 29,
      email: "test@testtttt.com",
      password: "Ahmedeltonamly@2012",
      CPassword: "Ahmedeltonamly@2012",
    });
    expect(res.statusCode).toEqual(200);
    console.log(res.body);
    expect(res.body).toEqual(
      jasmine.objectContaining({
        message: "Added",
        addedUser: jasmine.arrayContaining([
          jasmine.objectContaining({ userName: "ali" }),
        ]),
      })
    );
  });
});
