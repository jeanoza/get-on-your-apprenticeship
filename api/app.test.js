const request = require("supertest");
const app = require("./app");

describe("/real/student", () => {
  it("should response the GET method", (done) => {
    request(app)
      .get("/real/students")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  it("sholud send 25 students data(default)", (done) => {
    request(app)
      .get("/real/students")
      .then((response) => {
        expect(response.body.data).toHaveLength(25);
        done();
      });
  });
});

describe("/real/randomstudent", () => {
  it("should response the GET method", (done) => {
    request(app)
      .get("/real/randomstudent")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  it("sholud send students data having name property", (done) => {
    request(app)
      .get("/real/randomstudent")
      .then((response) => {
        expect(response.body.data).toHaveProperty("name");
        done();
      });
  });
});
