"use strict";
const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("GET /api/migration/routes", () => {
  it("lists routes with migration flags", async () => {
    const res = await request(app).get("/api/migration/routes");
    expect(res.body.routes).to.have.lengthOf(4);
  });
});

describe("GET /api/migration/status", () => {
  it("computes migration percentage", async () => {
    const res = await request(app).get("/api/migration/status");
    expect(res.body.totalRoutes).to.equal(4);
    expect(res.body.percentMigrated).to.equal(50);
  });
});
