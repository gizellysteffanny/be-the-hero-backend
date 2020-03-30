const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("Profile", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to list incidents of a ong", async () => {
    const response = await request(app)
      .get("/profile")
      .set("Authorization", "28d9a3cc");

    expect(response.status).toBe(200);
  });
});
