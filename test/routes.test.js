"use strict";
const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("route splitting", () => {
  it("serves the legacy placeholder at /legacy", async () => {
    const res = await request(app).get("/legacy/");
    expect(res.text).to.include("Legacy App");
  });
  it("serves the new-app placeholder at /app", async () => {
    const res = await request(app).get("/app/");
    expect(res.text).to.include("New App");
  });
  it("reports the migration routes at /", async () => {
    const res = await request(app).get("/");
    expect(res.body.legacy_app).to.equal("/legacy");
  });
});
